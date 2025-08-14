import React from 'react';
import './OurServices.css';
import { FaBrain, FaCloud, FaShieldAlt, FaSync, FaCogs, FaChartLine, FaLaptopCode, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaCloud />,
    title: "Custom Cloud Solutions",
    description: "Tailored development to meet your unique business needs. We build scalable, cost-effective solutions with end-to-end support to ensure seamless integration and optimal performance.",
    features: ["Personalized Service Plans", "Workflow Integration", "Scalable Architecture"],
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Automation",
    description: "Leverage the power of AI to automate repetitive tasks, gain intelligent insights, and drive innovation. Our AI solutions are designed to boost efficiency and unlock new opportunities.",
    features: ["Intelligent Process Automation", "Predictive Analytics", "Natural Language Processing"],
  },
  {
    icon: <FaSync />,
    title: "Cloud Migration & Modernization",
    description: "Seamlessly migrate your existing applications and infrastructure to the cloud. We help you modernize your legacy systems to improve efficiency, security, and scalability.",
    features: ["Legacy System Upgrades", "Data Migration", "Infrastructure Optimization"],
  },
  {
    icon: <FaShieldAlt />,
    title: "Managed Cloud Services",
    description: "Focus on your core business while we manage your cloud environment. Our team provides 24/7 monitoring, support, and optimization to ensure your cloud infrastructure is always running at its best.",
    features: ["24/7 Monitoring & Support", "Performance Optimization", "Security Management"],
  },
  {
    icon: <FaCogs />,
    title: "Custom Software Development",
    description: "We build custom software solutions for various industries, including Technology, Healthcare, Banking, Education, and Finance. Our solutions are tailored to your specific needs and designed to drive growth.",
    features: ["Industry-Specific Solutions", "Scalable and Secure", "Full Lifecycle Development"],
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics & BI",
    description: "Unlock the power of your data with our advanced analytics and business intelligence solutions. We help you make data-driven decisions and gain a competitive edge.",
    features: ["BI Dashboards", "Predictive Analytics", "Data Visualization"],
  },
  {
    icon: <FaLaptopCode />,
    title: "Web & Mobile App Development",
    description: "We design and develop modern, responsive, and user-friendly web and mobile applications. Our apps are built to perform and designed to impress.",
    features: ["Cross-Platform Development", "UI/UX Design", "API Integration"],
  },
  {
    icon: <FaUsers />,
    title: "IT Consulting & Strategy",
    description: "Our expert consultants help you align your IT strategy with your business goals. We provide strategic guidance and help you navigate the complexities of the digital landscape.",
    features: ["Technology Roadmap", "Digital Transformation", "IT Infrastructure Planning"],
  }
];

const OurServices = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">Flexible, scalable, and innovative solutions designed for your success.</p>

      <div className="services-wrapper">
        {services.map((service, index) => (
          <div key={index} className="service-card-new">
            <div className="service-card-inner">
              <div className="service-card-front">
                <div className="service-icon-new">{service.icon}</div>
                <h3 className="service-title-new">{service.title}</h3>
              </div>
              <div className="service-card-back">
                <div className="service-card-back-content">
                  <h3 className="service-title-new">{service.title}</h3>
                  <p className="service-description-new">{service.description}</p>
                  <ul className="service-features-new">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
