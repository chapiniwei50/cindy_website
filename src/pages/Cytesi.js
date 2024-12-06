import React from 'react';
import { Box, Typography, Grid, Divider,Button } from '@mui/material';
import './Cytesi.css';

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/cytesi.png" // Replace with the logo's file path
          alt="Company Logo"
          className="cytesi-company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            CyteSi Internship: Object Detection and PID Control
          </Typography>
          <Typography variant="body1" className="section-description">
            During my internship at CyteSi Inc., I worked on two critical experiments: developing a method to detect object movement distances and implementing a PID control mechanism. These projects involved advanced image processing, algorithm development, and control system design.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Position</Typography>
              <Typography variant="body2" className="overview-value">Software Engineer Intern</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">June 2024 - August 2024</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">🔧 Tools Used</Typography>
              <Typography variant="body2" className="overview-value">Python, OpenCV, C++</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Object Moving Detection Section */}
      <Box className="experiment-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🧪 Experiment 1: Object Moving Detection
          </Typography>
 
     

          <Typography variant="body1" className="section-description">
            The goal of this experiment was to develop a robust algorithm for detecting the movement distance of objects in sequential images.
          </Typography>
           {/* GitHub Button */}
      <Box className="github-button-section">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            href="https://docs.google.com/presentation/d/1v05FPT4yr13PmbV2jhrCKKWVP57oVMZmbD0IvoUjn7U/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Presentation 👀
          </Button>
        </div>
      </Box>
          <ul className="experiment-list">
            <li>
              <strong>Attempt 1:</strong> Detect the largest contour to calculate movement. However, detecting the outer border led to inaccuracies.
            </li>
            <li>
              <strong>Attempt 2:</strong> Crop out the middle area to isolate the upper object for accurate movement detection, but center alignment posed challenges.
            </li>
            <li>
              <strong>Attempt 3:</strong> Detect the top y-axis to calculate precise movement distances, achieving reliable results. 
         
            </li>
            <li>
              <strong>Attempt 4:</strong> Account for transformed images by detecting the largest contour after rotation/translation and applying cropping for accurate movement detection.
            </li>
          </ul>
          <Box className="image-section">
            <img src="/image/object.png" alt="Object Moving Detection Images" className="experiment-image" />
          </Box>
        </div>
      </Box>

      {/* PID Control Section */}
      <Box className="experiment-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🧪 Experiment 2: PID Control Mechanism
          </Typography>
          
     

          <Typography variant="body1" className="section-description">
            Designed and tested a PID control mechanism to regulate flow rate and pressure in a dynamic system.
          </Typography>
           {/* GitHub Button */}
      <Box className="github-button-section">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            href="https://docs.google.com/presentation/d/1ElJ6XqN8VXd6g8paeeqYrUu3gkb4gRWt3ayQPWZqtE0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Presentation 👀
          </Button>
        </div>
      </Box>
          <ul className="experiment-list">
            <li>
              <strong>Proportional (P):</strong> Adjusted correction to stabilize response time and control overshooting.
            </li>
            <li>
              <strong>Integral (I):</strong> Fine-tuned steady-state error but faced challenges with instability at high values.
            </li>
            <li>
              <strong>Derivative (D):</strong> Enhanced the ability to anticipate changes, but excessive values led to instability.
            </li>
          </ul>
         
        </div>
      </Box>

      {/* Lessons Learned Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ⭐️ Lessons Learned
          </Typography>
          <Typography variant="body1" className="section-description">
            This internship allowed me to explore advanced image processing techniques and PID control systems. I learned to refine algorithms, improve collaboration, and troubleshoot complex hardware issues effectively.
          </Typography>
        </div>
      </Box>

      {/* Conclusion Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🎊 Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            My experience at CyteSi Inc. helped me gain deeper insights into image processing and dynamic system control. It was a transformative journey, shaping my technical and problem-solving skills.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
