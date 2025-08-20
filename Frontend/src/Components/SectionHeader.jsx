import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="section-header">
      <div className="container">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p> {/* Added class here */}
      </div>
    </header>
  );
};

export default SectionHeader;
