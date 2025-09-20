import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioDetails } from '../../../globals/constants';
import ItodoImage from '../../elements/itodo-img';

const PortfolioDetails = () => {
  const { id } = useParams();
  const project = portfolioDetails[id];

  if (!project) {
    return (
      <div className="section-full p-t110 p-b80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Project Not Found</h2>
              <p>The project you're looking for doesn't exist.</p>
              <Link to="/portfolio" className="btn btn-primary">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wraper" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
      {/* Hero Section */}
      <div className="section-full p-t110 p-b80" style={{ background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="sx-head-s-title" style={{ color: '#a0aec0', marginBottom: '10px' }}>
                {project.category}
              </div>
              <h1 className="sx-title" style={{ color: '#ffffff', marginBottom: '20px' }}>
                {project.title}
              </h1>
              <p style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '30px' }}>
                {project.overview}
              </p>
              <div className="d-flex gap-3 mb-4">
                <span className="badge" style={{ backgroundColor: '#4a5568', color: '#ffffff', padding: '8px 16px' }}>
                  Duration: {project.duration}
                </span>
                <span className="badge" style={{ backgroundColor: '#4a5568', color: '#ffffff', padding: '8px 16px' }}>
                  Team: {project.team}
                </span>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-lg"
                  style={{ backgroundColor: '#667eea', color: '#ffffff', border: 'none' }}
                >
                  View Live Project
                </a>
              )}
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <ItodoImage 
                  src={project.img} 
                  alt={project.title}
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#2d3748' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>Project Overview</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>Understanding the Vision</div>
              </div>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#e2e8f0' }}>
                {project.overview}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#1a202c' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>Technology Stack</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>Tools & Technologies Used</div>
              </div>
              <div className="row">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div className="sx-service-bx-2 text-center p-3" style={{ backgroundColor: '#2d3748', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', border: '1px solid #4a5568' }}>
                      <div className="sx-icon-box-wraper">
                        <div className="sx-why-ch-category" style={{ color: '#e2e8f0' }}>{tech}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#2d3748' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>Key Features</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>What Makes It Special</div>
              </div>
              <div className="row">
                {project.features.map((feature, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="sx-service-bx-2 p-4" style={{ backgroundColor: '#1a202c', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)', height: '100%', border: '1px solid #4a5568' }}>
                      <div className="sx-icon-box-wraper">
                        <div className="sx-why-ch-category text-center" style={{ color: '#e2e8f0' }}>
                          <i className="fa fa-check-circle text-success me-2"></i>
                          {feature}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#1a202c' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>The Challenge</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>What We Had to Solve</div>
              </div>
              <div className="sx-service-bx-2 p-5" style={{ backgroundColor: '#2d3748', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid #4a5568' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
                  {project.challenge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#2d3748' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>Our Process</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>How We Approached It</div>
              </div>
              <div className="sx-service-bx-2 p-5" style={{ backgroundColor: '#1a202c', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid #4a5568' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
                  {project.process}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="section-full p-t80 p-b80" style={{ backgroundColor: '#1a202c' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="sx-title" style={{ color: '#ffffff' }}>The Solution</h2>
                <div className="sx-head-s-title" style={{ color: '#a0aec0' }}>What We Delivered</div>
              </div>
              <div className="sx-service-bx-2 p-5" style={{ backgroundColor: '#2d3748', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid #4a5568' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#e2e8f0', margin: 0 }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section-full p-t80 p-b80" style={{ background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>
                Ready to Start Your Project?
              </h2>
              <p style={{ color: '#e2e8f0', fontSize: '18px', marginBottom: '30px' }}>
                Let's discuss how we can help bring your vision to life.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: '#667eea', color: '#ffffff', border: 'none' }}>
                  Get In Touch
                </Link>
                <Link to="/portfolio" className="btn btn-lg" style={{ backgroundColor: 'transparent', color: '#ffffff', border: '2px solid #667eea' }}>
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
