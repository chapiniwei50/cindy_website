import React from 'react';
import { Box, Typography, Grid, Button, Divider } from '@mui/material';
import './Pennspark.css';

const PennSparkPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="pennspark-logo-section">
        <img
          src="/image/sparkcover.png" // Replace with the PennSpark logo file path
          alt="PennSpark Logo"
          className="pennspark-company-logo"
        />
      </Box>

      {/* Position and Timeline Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Pennspark         
          </Typography>
          <Typography variant="body1" className="section-description">
              a student club at the University of Pennsylvania that bridge tech and design to build both creative projects and impactful products for clients and the community         
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Role</Typography>
              <Typography variant="body2" className="overview-value">Advanced Fullstack Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">Jan 2023 - now</Typography>
            </Grid>
           
          </Grid>
        </div>
      </Box>

      {/* Projects Section */}
      <Box className="projects-container">
        <Grid container spacing={4}>
          {/* Project 1 Card */}
          <Grid item xs={12} md={6}>
            <Box className="project-card">
              <img
                src="/image/sparkinphotos.png"
                alt="Spark in Photos Project"
                className="project-image"
              />
              <Box className="project-info">
                <Typography variant="h5" className="project-title">
                  Spark in Photos 📸
                </Typography>
                <Typography variant="body2" className="project-description">
                Spark-in-photos serves as an online photo album- a way of automatically collecting and showcasing all the memories within Spark (and our Slack) in one place.                </Typography>
                <Divider className="project-divider"/>
          
                <Typography variant="body2" className="contribution">
                🙋🏻‍♀️ My Contributions: 
                </Typography>
                <Typography variant="body2" className="project-description">
                  Built backend integration with Cloudinary to enable photo storage and retrieval for Spark’s online photo album.
                </Typography>
                <Button
                  variant="contained"
                  className="project-button"
                  href="https://work.pennspark.org/spring23/spark-in-photos/"
                >
                  View Project 👀 
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Project 2 Card */}
          <Grid item xs={12} md={6}>
            <Box className="project-card">
              <img
                src="/image/eventsatpenn.png"
                alt="Second Project"
                className="project-image"
              />
              <Box className="project-info">
                <Typography variant="h5" className="project-title">
                  Events at Penn 🗓️
                </Typography>
                <Typography variant="body2" className="project-description">
                a platform for students to discover social events, explore dining options, and find fun activities around campus while supporting local businesses                </Typography>
                <Divider className="project-divider"/>
          
                <Typography variant="body2" className="contribution">
                🙋🏻‍♀️ My Contributions: 
                </Typography>
                <Typography variant="body2" className="project-description">
                Led front-end development and integrated key features for a collaborative application.                </Typography>
                <Button
                  variant="contained"
                  className="project-button"
                  href="https://github.com/PennSpark/sp24-events-at-penn"
                >
                  View Project 👀
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PennSparkPage;
