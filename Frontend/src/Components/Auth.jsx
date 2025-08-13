import React, { useState } from 'react';
import { Client, Account, OAuthProvider } from 'appwrite';
import './Auth.css';

const client = new Client()
  .setEndpoint('https://nyc.cloud.appwrite.io/v1')
  .setProject('6886ffec0010e7b19e2a');

const account = new Account(client);

const Auth = ({ closeForm, setLoggedInUser }) => {
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleLoginOrSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (isSignupMode) {
      if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters long.');
        return;
      }
      setPasswordError('');

      try {
        const name = e.target.nameField.value;
        await account.create('unique()', email, password, name);
        setIsSignupMode(false);
        alert('Signup successful! Please log in.');
      } catch (err) {
        alert(err.message);
      }
      return;
    }

    setPasswordError('');

    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      setLoggedInUser(user.name || user.email.split('@')[0]);
      closeForm();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = () => {
    account.createOAuth2Session(
      OAuthProvider.Google,
      window.location.origin,
      window.location.origin,
      []
    );
  };

  return (
    <div className="auth-overlay">
      <div className="auth-form-container">
        <button className="close-button" onClick={closeForm}>✕</button>
        <h2>{isSignupMode ? 'Create an Account' : 'Welcome Back'}</h2>
        <p>{isSignupMode ? 'Join us to start your journey.' : 'Log in to continue.'}</p>

        <form onSubmit={handleLoginOrSignup}>
          {isSignupMode && (
            <input type="text" name="nameField" placeholder="Full Name" required />
          )}
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          {passwordError && <p className="password-error">{passwordError}</p>}
          <button type="submit" className="auth-submit-button">
            {isSignupMode ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="auth-toggle">
          {isSignupMode ? (
            <p>
              Already have an account?{' '}
              <span onClick={() => setIsSignupMode(false)}>Login</span>
            </p>
          ) : (
            <p>
              New user? <span onClick={() => setIsSignupMode(true)}>Sign up</span>
            </p>
          )}
        </div>

        <div className="social-login">
          <div className="divider">OR</div>
          <button onClick={handleGoogleLogin} className="social-button google">
            <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
