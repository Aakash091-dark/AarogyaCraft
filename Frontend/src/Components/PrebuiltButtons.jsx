import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonStyles.css';

const PrebuiltButtons = () => {
  return (
    <div className="buttons">
      <Link to="/prebuilt" className="btn prebuilt-btn">
        Pre-built
      </Link>
    </div>
  );
};

export default PrebuiltButtons;
