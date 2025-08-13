import React from 'react';
import { Link } from 'react-router-dom';
import './prebuiltPage.css';
import SectionHeader from '../Components/SectionHeader';

const PrebuiltPage = () => {
  const prebuiltSystems = [
  ];

  return (
    <div className="prebuilt-page">
      <SectionHeader
        title="Pre-built Solutions"
      />

      <main className="container">
        <section className="comparison-section">
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Intermediate</th>
                  <th>Advanced</th>
                  <th>Fully Automated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AI Automation</td>
                  <td className="cross">❌</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                </tr>
                <tr>
                  <td>Cloud Integration</td>
                  <td className="cross">❌</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                </tr>
                <tr>
                  <td>SMS Alerts</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                </tr>
                <tr>
                  <td>Insurance System</td>
                  <td className="cross">❌</td>
                  <td className="cross">❌</td>
                  <td className="tick">✅</td>
                  <td className="tick">✅</td>
                </tr>
                <tr>
                  <td>Complete Automation</td>
                  <td className="cross">❌</td>
                  <td className="cross">❌</td>
                  <td className="cross">❌</td>
                  <td className="tick">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="solutions-grid">
          {prebuiltSystems.map((system, index) => (
            <div key={index} className="solution-card">
              <img
                src={system.imageUrl}
                alt={system.title}
                className="solution-image"
              />
              <div className="solution-content">
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <Link to="/contact" className="btn btn-primary">
                  Request a Demo
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default PrebuiltPage;
