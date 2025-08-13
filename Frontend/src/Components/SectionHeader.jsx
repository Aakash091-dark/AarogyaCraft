import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="section-header">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default SectionHeader;
