import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Stanford.css'; // Use the same CSS for consistent styling

const PathatPenn = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/pennlogo.png" // Replace with the Path@Penn logo path
          alt="Path@Penn Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Redesigning Path@Penn: Streamlining Course Selection
          </Typography>
          <Typography variant="body1" className="section-description">
            A comprehensive redesign of the Penn course selection system, addressing user concerns with intuitive interfaces, improved search functionality, and smoother workflows for students.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Role</Typography>
              <Typography variant="body2" className="overview-value">UX Designer & Researcher</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Timeline</Typography>
              <Typography variant="body2" className="overview-value">November 2024 - December 2024</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                Figma, Adobe XD, UserTesting.com
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Insight Statements Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Insights and Research
          </Typography>
          <Typography variant="body1" className="section-description">
            Key insights gathered from user interviews and testing:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                Students find the current course selection interface visually overwhelming and difficult to navigate.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Searching for courses is error-prone, with limited tolerance for typos or filtering preferences.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Students need a more effective way to track their major progress and compare course schedules side by side.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/insights-screenshot.png" // Replace with your insights image path
              alt="Insight Statements"
              className="experiment-image"
            />
          </div>
        </div>
      </Box>

      {/* Design Solutions Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Proposed Solutions
          </Typography>
          <Typography variant="body1" className="section-description">
            The redesign focuses on the following improvements:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Improved Search:</b> A more intuitive search system with typo tolerance and advanced filtering options.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Visual Enhancements:</b> A clean and user-friendly interface with less visual clutter.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Organizational Tools:</b> Features like side-by-side schedule comparisons and progress tracking for majors.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/proposed-design.png" // Replace with your design screenshot path
              alt="Proposed Design"
              className="experiment-image"
            />
          </div>
        </div>
      </Box>

      {/* Prototype and User Testing Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Prototype and Testing
          </Typography>
          <Typography variant="body1" className="section-description">
            User testing of the prototype revealed positive feedback on the streamlined design and improved navigation.
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                Users appreciated the ability to easily compare schedules and track major requirements.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                The search functionality significantly reduced frustration with finding courses.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Notifications for errors or actions (e.g., course registration confirmation) were well-received.
              </Typography>
            </li>
          </ul>
        </div>
      </Box>

      {/* Reflection Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Reflection
          </Typography>
          <Typography variant="body1" className="section-description">
            Redesigning Path@Penn provided valuable insights into user-centered design principles. The project highlighted the importance of listening to student needs and iterating designs based on feedback to create meaningful solutions.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default PathatPenn;
