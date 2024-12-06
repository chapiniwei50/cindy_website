import React from 'react';
import { Box, Typography, Divider,Grid,Button } from '@mui/material';
import './Miniminecraft.css'; // Reusing the Stanford.css theme

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
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Role</Typography>
              <Typography variant="body2" className="overview-value">Co-Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                November 2023 - December 2023
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">C++, OpenGL, GLSL</Typography>
              <Typography variant="body2" className="overview-value">
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
   {/* GitHub Button */}
   <Box className="github-button-section">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/chapiniwei50/Mini_Minecraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on github 👀
          </Button>
        </div>
      </Box>


      {/* Demo Video Section */}
      <Box className="demo-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🎥 Demo Video</Typography>
        
          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/u2c4my5wR0Q" // Replace with your demo video link
              title="Mini Minecraft Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>

      {/* Procedural Terrain Generation Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🗻 Procedural Terrain Generation</Typography>
          <Typography variant="body1" className="section-description">
            <b>Chunk-based Terrain:</b> The terrain is generated in chunks (16x256x16 blocks) for efficient horizontal world expansion. Each chunk is stored in a map keyed by coordinates.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Biome-specific Noise Functions:</b>
            <ul>
              <li><b>Plains:</b> Generated with Worley noise to create gentle, rolling hills.</li>
              <li><b>Desert:</b> Features flat terrain with tuned Perlin noise.</li>
              <li><b>Mountains:</b> Dramatic elevation achieved using higher amplitude Perlin noise.</li>
            </ul>
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Biome Transitions:</b> Smooth biome transitions implemented with smoothstep functions and additional Perlin noise layers to ensure seamless blending between biomes.
          </Typography>
        </div>
      </Box>

      {/* Efficient Terrain Rendering Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🏞️ Efficient Terrain Rendering</Typography>
          <Typography variant="body1" className="section-description">
            <b>Chunk Optimization:</b> Terrain rendering is optimized by examining only boundary blocks of a chunk and updating VBO data for modified chunks.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Dynamic Chunk Loading:</b> New chunks are generated dynamically as the player approaches the edge of the terrain.
          </Typography>
        </div>
      </Box>

      {/* Player Interaction Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🧍‍♂️ Player Interaction</Typography>
          <Typography variant="body1" className="section-description">
            <b>Input Handling:</b> Key and mouse events allow the player to move, jump, fly, and interact with blocks. Camera rotation is handled by mouse movement.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Block Interaction:</b> Players can add or remove blocks by right-clicking or left-clicking within a specified radius.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Physics and Collisions:</b> Gravity, friction, and collision detection are implemented using raycasting and grid marching.
          </Typography>
        </div>
      </Box>

      {/* Post-processing Effects Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🌊 Post-processing Effects</Typography>
          <Typography variant="body1" className="section-description">
            <b>Water and Lava Overlays:</b> Blue and red tint effects are applied when the player is underwater or in lava. The player’s speed reduces in these states, with mechanics for floating and jumping out.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Ripple and Bubble Effects:</b> Worley noise and sine functions simulate underwater light refraction and distortion for immersive visuals.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Sobel Filter:</b> Enhances edge sharpness using depth texture gradients, improving clarity and visual stylization.
          </Typography>
        </div>
      </Box>

      {/* Multithreaded Terrain Generation Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">⛰️ Multithreaded Terrain Generation</Typography>
          <Typography variant="body1" className="section-description">
            <b>Thread Management:</b> Terrain generation and VBO updates are multithreaded for efficiency, separating the binding and generation processes.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Procedural Caves:</b> Integrated 3D Perlin noise generates caves naturally within the terrain.
          </Typography>
        </div>
      </Box>

      {/* Texturing and Visual Enhancements Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">👀 Texturing and Visual Enhancements</Typography>
          <Typography variant="body1" className="section-description">
            <b>Texture Mapping:</b> Textures are mapped with UV coordinates, distinguishing between opaque and transparent objects. Animating textures are handled by a dedicated UV coordinate.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Grass Coloring:</b> Grass textures are procedurally colored based on Perlin noise, with distinct colors for side and top textures.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Water Waves:</b> Simulated using sine functions in the vertex shader, with dynamic reflections and highlights in the fragment shader.
          </Typography>
        </div>
      </Box>

      {/* Procedural Asset Placement Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🏜️ Procedural Asset Placement</Typography>
          <Typography variant="body1" className="section-description">
            <b>Tree Placement:</b> Trees are randomly placed in the plains biome, ensuring sufficient spacing between trees to avoid crowding.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Layered Canopy:</b> Tree canopies consist of multiple layers for a realistic appearance.
          </Typography>
        </div>
      </Box>

      {/* Day and Night Cycle Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🌄 Day and Night Cycle</Typography>
          <Typography variant="body1" className="section-description">
            <b>Dynamic Sky Rendering:</b> The sky dynamically changes over time using spherical UVs, Worley noise, and FBM for moving clouds. The sun's position rotates to simulate a natural day-night cycle.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Dynamic Lighting:</b> Block illumination changes based on the sun’s angle, simulating realistic ambient and diffuse lighting during different times of the day.
          </Typography>
        </div>
      </Box>

      {/* Shadow Mapping Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">⛅️ Shadow Mapping</Typography>
          <Typography variant="body1" className="section-description">
            <b>Adaptive Shadow Resolution:</b> Shadows are rendered with higher resolution when the player is near the ground.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Smooth Shadows:</b> PCF (Percentage Closer Filtering) ensures smooth shadow edges, particularly for near-ground scenarios.
          </Typography>
        </div>
      </Box>

      {/* Enhanced Terrain Generation Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">🏞️ Enhanced Terrain Generation</Typography>
          <Typography variant="body1" className="section-description">
            <b>Improved Biome Transitions:</b> Gradual blending of stone and grass blocks creates smooth transitions between plains and hills.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Realistic River Generation:</b> River valleys are generated by lowering terrain at transitions and filling them with water.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Fog Effect:</b> Distance-based fog blends fragment colors with fog colors using linear interpolation, creating depth and atmospheric visuals.
          </Typography>
        </div>
      </Box>

      {/* Debugging and Collaboration Improvements Section */}
      <Box className="feature-section">
        <div className="container">
          <Typography variant="h5" className="section-title">👾 Debugging and Collaboration Improvements</Typography>
          <Typography variant="body1" className="section-description">
            <b>Bug Fixes:</b> Issues like incorrect delta time calculation, collision jittering, and raycasting inaccuracies were resolved.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Multithreading Debugging:</b> Synchronization issues in terrain generation were addressed by reorganizing thread operations.
          </Typography>
          <Typography variant="body1" className="section-description">
            <b>Cross-platform Input Handling:</b> Adjusted mouse handling logic for compatibility across operating systems.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
