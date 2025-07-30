const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/dbConnect'); // assumes db is setup with pg.Pool

// token creator
function generateToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
}

//Sign-up logic
exports.signup = async (req, res) => {
    console.log('SignUp request received:', req.body);
    try {
        const { name, email, password } = req.body;

        if (!email || !name || !password) {
            return res.status(400).send('All fields are required');
        }

        // Check if the email exists
        const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).send('Email is already associated with an account');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, process.env.BCRYPT_SALT_ROUNDS || 12);

        // Create the user
        const result = await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, hashedPassword]
        );

        const user = result.rows[0];

        // Generate JWT token
        const token = generateToken(user.id);

        return res.status(201).json({
            message: 'SignUp successful',
            user,
            token
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send('Error in registering user');
    }
};

//login logic
exports.login = async (req, res) => {
    console.log('Login request received:', req.body);
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send('All fields are required');
        }


        // Check if the user exists
        const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userCheck.rows.length === 0) {
            return res.status(404).send('Invalid credentials!');
        }

        const user = userCheck.rows[0];

        // Verify password
        if(!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send('Invalid credentials!');
        }

        // Generate JWT token
        const token = generateToken(user.id);

        return res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Error in logging in user');
    }
};
