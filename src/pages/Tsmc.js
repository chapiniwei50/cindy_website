import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Tsmc.css';

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/tsmc.png" // Replace with the logo's file path
          alt="Company Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            TSMC Internship: Enhancing FNO Model for AMRS-DB
          </Typography>
          <Typography variant="body1" className="section-description">
            Worked on improving defect detection in AMRS-DB using the Fourier Neural Operator (FNO) model. Focused on model enhancements to reduce error rates and improve accuracy in identifying defects and non-defects.
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
              <Typography variant="body2" className="overview-value">Python, TensorFlow, FNO, Jupyter</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Horizontal Sections for Introduction and Goals */}
      <Box className="intro_goal_container">
      <Box className="horizontal-section-container">
  <Box className="horizontal-section">
    <Typography variant="h5" className="section-title">📖 Introduction</Typography>
    <Typography variant="body1" className="section-description">
      AMRS-DB processes single-die images without reference dies, requiring GDS and defect images to generate comparison references. My work focused on improving defect detection and reducing nuisance from non-defect areas.
    </Typography>
  </Box>
  <Box className="horizontal-section">
    <Typography variant="h5" className="section-title">🎯 Project Goals</Typography>
    <Typography variant="body1" className="section-description">
      To evaluate FNO-ST model behavior on AMRS-DB and optimize it for best results. Experiments aimed to improve defect detection accuracy and minimize L1 edge errors.
    </Typography>
  </Box>
</Box>
</Box>

      {/* Experiments and Methods Section */}
<Box className="impact-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
    🧪 Experiments and Methods
    </Typography>
    <ul className="experiment-list">
      <li>
        <div>
          <Typography variant="body1" className="experiment-title">
            Adaptive Instance Normalization (AdaIN)
          </Typography>
          <Typography variant="body2" className="experiment-description">
            Introduced AdaIN between every decoder layer to incorporate tool features into the decoding process.
          </Typography>
          <ul className="sub-list">
            <li>
              Experimented with outputting tool features from all encoder layers instead of only the final encoder layer.
            </li>
            <li>
              Found that applying AdaIN on a single layer produced results closer to the desired DD image.
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <Typography variant="body1" className="experiment-title">
            Intensity Augmentation
          </Typography>
          <Typography variant="body2" className="experiment-description">
            Enhanced the dataset by modifying image intensities to increase the model's ability to detect subtle defects.
          </Typography>
          <ul className="sub-list">
            <li>
              Improved model generalization for different lighting conditions.
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div>
          <Typography variant="body1" className="experiment-title">
            Synthetic Defects
          </Typography>
          <Typography variant="body2" className="experiment-description">
            Added synthetic defects to training images to simulate real-world scenarios.
          </Typography>
          <ul className="sub-list">
            <li>
              Increased model robustness in detecting challenging defect cases.
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</Box>

      {/* Results Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          📝 Results
          </Typography>
          <Typography variant="body1" className="section-description">
            Achieved CD error within ±2% for non-defects and CE error within ±3% for defect cases. Some methods, such as using AdaIN across all decoder layers, worsened performance compared to single-layer implementation.
          </Typography>
        </div>
      </Box>

      {/* Lessons Learned Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          💡 Lessons Learned
          </Typography>
          <Typography variant="body1" className="section-description">
            Gained expertise in neural model architectures and a deeper understanding of FNO-ST. Improved problem-solving and collaboration skills while navigating complex datasets and refining machine learning models.
          </Typography>
        </div>
      </Box>

      {/* Overall Experience Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          🎊 Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            My internship at TSMC was an invaluable experience, where I contributed to advancing defect detection technologies. This project enhanced my technical skills and reinforced my passion for innovative solutions in computer vision and machine learning.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default ProjectDetailPage;
