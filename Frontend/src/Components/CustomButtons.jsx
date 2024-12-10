import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonStyles.css';

const CustomButtons = () => {
  return (
    <div className="buttons">
      <Link to="/custom" className="btn custom-btn">
        Custom
      </Link>
    </div>
  );
};

export default CustomButtons;
