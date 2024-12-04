import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Stanford.css'; // Reusing the Stanford.css theme

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/minecraftlogo.png" // Replace with the logo's file path
          alt="Mini Minecraft Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Mini Minecraft Project
          </Typography>
          <Typography variant="body1" className="section-description">
            This project is a simplified version of Minecraft implemented using C++ and OpenGL. It features terrain generation, player controls, block manipulation, biomes, day and night cycles, and post-processing effects. This collaborative project showcases complex systems like procedural generation and multithreading.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Role</Typography>
              <Typography variant="body2" className="overview-value">Graphics Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Timeline</Typography>
              <Typography variant="body2" className="overview-value">September 2024 - November 2024</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                C++, OpenGL, GLSL, Multithreading
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Features Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Features
          </Typography>
          <Typography variant="body1" className="section-description">
            This project implemented several advanced features:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Procedural Terrain Generation:</b> Dynamic biomes using Perlin and Worley noise for diverse landscapes.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Chunk-Based Rendering:</b> Efficient terrain rendering divided into 16x256x16 chunks.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Player Interaction:</b> Movement, jumping, flying, and block manipulation with optimized collision detection.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Visual Effects:</b> Day-night cycle, underwater/lava shaders, and post-processing with dynamic skyboxes.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/terrain-generation.png"
              alt="Procedural Terrain Generation"
              className="experiment-image"
            />
            <img
              src="/images/day-night-cycle.png"
              alt="Day and Night Cycle"
              className="experiment-image"
            />
          </div>
        </div>
      </Box>

      {/* Challenges Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Challenges and Solutions
          </Typography>
          <Typography variant="body1" className="section-description">
            Developing this project required solving numerous technical challenges:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Biome Transitions:</b> Ensuring smooth transitions between biomes was achieved through blending Perlin noise layers.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Post-Processing Shaders:</b> Creating realistic underwater and lava effects required Worley noise and GLSL optimizations.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Performance Optimization:</b> Multithreaded chunk generation significantly reduced load times.
              </Typography>
            </li>
          </ul>
        </div>
      </Box>

      {/* Demo Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Demo
          </Typography>
          <Typography variant="body1" className="section-description">
            Watch a demo of the Mini Minecraft project in action:
          </Typography>
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/u2c4my5wR0Q"
              title="Mini Minecraft Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>

      {/* Overall Experience Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            This project allowed me to explore advanced graphics programming and game development techniques. I gained hands-on experience with OpenGL, procedural generation, and shader programming, enhancing both my technical skills and collaborative abilities.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
