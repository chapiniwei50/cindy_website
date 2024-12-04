import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Stanford.css'; // Use the same CSS for consistent styling

const PetBook = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/petbooklogo.png" // Replace with the PetBook logo file path
          alt="PetBook Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            PetBook: A Social Media Platform for Pet Owners
          </Typography>
          <Typography variant="body1" className="section-description">
            PetBook is a social media platform that allows pet owners to connect, share updates, and celebrate their pets. From creating posts to participating in group chats, PetBook fosters a thriving pet-loving community.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Role</Typography>
              <Typography variant="body2" className="overview-value">Frontend Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                November 2022 - December 2022
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                React.js, AWS (DynamoDB, S3), Node.js, Spark, Socket.io, AJAX
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
            Watch a demo of PetBook in action:
          </Typography>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/p8X7T2L7yPg"
              title="PetBook Demo"
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
                <b>User Accounts:</b> Secure sign-up with hashed passwords, interest-based profiles, and account editing capabilities.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Homepage & Walls:</b> Chronological feeds of user posts, walls, and comments with real-time updates.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Friends:</b> Search, add, and remove friends. Real-time friend status updates and notifications.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Dynamic Content:</b> Live friend requests, status updates, and new posts updated every 5 seconds.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Chat:</b> Group chats, chat invites, and live messaging with Socket.io for efficient communication.
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
            The following technologies powered the development of PetBook:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Frontend:</b> React.js for dynamic, interactive user interfaces.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Backend:</b> Node.js with AWS DynamoDB for scalable data storage.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Real-Time Messaging:</b> Socket.io for efficient group and private chat functionality.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Security:</b> Password hashing with SHA-256 for secure user authentication.
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
            Several challenges arose during PetBook's development:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Real-Time Updates:</b> Balancing frequent updates with performance. Solution: Optimized AJAX calls to only fetch new data.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Chat Scalability:</b> Efficiently managing large chat rooms. Solution: Used Socket.io for real-time updates and DynamoDB for persistent data storage.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Security:</b> Ensuring user data privacy. Solution: Implemented SHA-256 encryption for sensitive data.
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
            PetBook was a rewarding project where I developed skills in full-stack development, real-time web applications, and user-centric design. Working on the frontend allowed me to enhance my expertise in React.js and dynamic content rendering, while collaborating with the backend team deepened my understanding of scalable architecture.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default PetBook;
