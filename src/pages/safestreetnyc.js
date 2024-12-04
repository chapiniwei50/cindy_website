import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './safestreetnyc.css'; // Use the same CSS for consistent styling

const SafeStreetNYC = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/safestreetlogo.png" // Replace with the SafeStreetNYC logo file path
          alt="SafeStreetNYC Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            SafeStreetNYC: Housing, Safety, and Healthcare Insights for NYC
          </Typography>
          <Typography variant="body1" className="section-description">
            SafeStreetNYC is a web application aimed at helping users make informed decisions when choosing housing or Airbnb locations in New York City. The app compiles data on crime rates, healthcare locations, demographics, and property prices to provide personalized recommendations for safety, price, and access to healthcare.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Role</Typography>
              <Typography variant="body2" className="overview-value">
                Frontend Developer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                March 2023 - May 2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                React.js, Google Maps API, MySQL, DynamoDB
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Demo Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Demo
          </Typography>
          <Typography variant="body1" className="section-description">
            Watch a demo of SafeStreetNYC in action:
          </Typography>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/p8X7T2L7yPg"
              title="SafeStreetNYC Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>

      {/* Features Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Features
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Login Page:</b> Secure user authentication with Google and Facebook login integration.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Airbnb Recommendations:</b> Personalized Airbnb suggestions based on safety, price, and healthcare access, displayed on an interactive map.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Housing Insights:</b> Neighborhood recommendations with demographic breakdown and pricing.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Crime Statistics:</b> Detailed crime frequency and types in proximity to the user's selected location.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Hospital Locator:</b> Search for healthcare facilities by type and location with contact details.
              </Typography>
            </li>
          </ul>
        </div>
      </Box>

      {/* Technology Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Technology Stack
          </Typography>
          <Typography variant="body1" className="section-description">
            The following technologies were used to build the SafeStreetNYC application:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Frontend:</b> React.js for an interactive and responsive user interface, Google Maps API for visualizing data on maps.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Backend:</b> Node.js with MySQL (AWS RDS) for housing, crime, and demographic data, and DynamoDB for secure user authentication.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Security:</b> Password hashing with SHA-256 and OAuth integration for login via Google and Facebook.
              </Typography>
            </li>
          </ul>
        </div>
      </Box>

      {/* Challenges and Solutions Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Challenges and Solutions
          </Typography>
          <Typography variant="body1" className="section-description">
            Developing SafeStreetNYC posed several technical challenges:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Large Datasets:</b> Handling millions of rows of data from crime and property datasets. Solution: Optimized queries and used Python Pandas for preprocessing.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Complex Queries:</b> Compiled multi-criteria ranking algorithms for housing and Airbnb recommendations.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Map Integration:</b> Displaying data interactively using Google Maps API and markers for Airbnbs, hospitals, and crimes.
              </Typography>
            </li>
          </ul>
        </div>
      </Box>

      {/* Overall Experience Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            Building SafeStreetNYC was a collaborative and rewarding experience, where I honed my skills in frontend development, data visualization, and integrating APIs. This project taught me the importance of designing user-centric applications and optimizing complex systems for performance.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default SafeStreetNYC;
