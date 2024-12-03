import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Stanford.css';

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/stanford.png" // Replace with the logo's file path
          alt="Company Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Company Name
          </Typography>
          <Typography variant="body1" className="section-description">
            A detailed description of your role, responsibilities, and the impact of your work at the company.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Position</Typography>
              <Typography variant="body2" className="overview-value">Software Engineer Intern</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Timeline</Typography>
              <Typography variant="body2" className="overview-value">June 2024 - August 2024</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Tools Used</Typography>
              <Typography variant="body2" className="overview-value">Python, TensorFlow, FNO, Jupyter</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Impact Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Impact
          </Typography>
          <Typography variant="body1" className="section-description">
            Highlight the measurable outcomes or results of your work, such as improving model performance by 20% or reducing production errors.
          </Typography>
        </div>
      </Box>

      {/* Lessons Learned Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Lessons Learned
          </Typography>
          <Typography variant="body1" className="section-description">
            Share key takeaways or insights gained from the project, such as improving teamwork, technical skills, or problem-solving approaches.
          </Typography>
        </div>
      </Box>

      {/* Overall Experience Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            Conclude with your overall experience at the company, summarizing the most impactful aspects and how it helped shape your career goals.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
