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
          alt="Stanford Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Stanford Internship: Image Processing for Droplet Detection
          </Typography>
          <Typography variant="body1" className="section-description">
            During my internship at Stanford, I worked on developing advanced image processing algorithms to accurately detect, normalize, and analyze droplet patterns in high-resolution images under varying conditions.
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
              <Typography variant="body2" className="overview-value">
                Python, OpenCV, CLAHE, NumPy
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Methodology Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Methodology
          </Typography>
          <Typography variant="body1" className="section-description">
            The project involved several stages of image processing, from preprocessing and normalization to final droplet detection and border segmentation:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Preprocessing:</b> Applied Gaussian blur and thresholding to reduce noise and enhance edges.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Normalization:</b> Utilized CLAHE (Contrast Limited Adaptive Histogram Equalization) to normalize uneven lighting across the images.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Contour Detection:</b> Detected droplet contours using Canny edge detection and morphological transformations.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Postprocessing:</b> Removed artifacts like black dots and refined droplet segmentation using dilation and erosion.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/normalization-before-after.png"
              alt="Normalization Before and After"
              className="experiment-image"
            />
            <img
              src="/images/droplet-detection.png"
              alt="Droplet Detection Process"
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
            During the project, I faced several challenges:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                <b>Uneven Lighting:</b> Initial attempts at segmentation failed due to overexposed centers. Solution: Normalized images using CLAHE for consistent brightness levels.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Droplet Artifacts:</b> Smaller black dots affected contour detection. Solution: Removed artifacts using optimized morphological operations (dilate and erode).
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <b>Border Detection:</b> Accurately identifying borders was difficult under bright spots. Solution: Applied advanced edge detection techniques on CLAHE-enhanced images.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/border-detection.png"
              alt="Border Detection"
              className="experiment-image"
            />
          </div>
        </div>
      </Box>

      {/* Results Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            Results
          </Typography>
          <Typography variant="body1" className="section-description">
            The final algorithm successfully detected droplets and their borders with significantly improved accuracy. Key outcomes include:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">
                Improved segmentation precision by 30% compared to baseline attempts.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Enhanced brightness normalization to address uneven lighting issues.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Automated droplet detection workflow optimized for high-throughput experiments.
              </Typography>
            </li>
          </ul>
          <div className="image-section">
            <img
              src="/images/final-detection-result.png"
              alt="Final Detection Result"
              className="experiment-image"
            />
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
            This internship provided invaluable hands-on experience in applying image processing techniques to solve real-world challenges in scientific research. I improved my skills in Python, OpenCV, and problem-solving while contributing to innovative projects.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
