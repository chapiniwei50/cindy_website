import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Tsmc.css';

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section (unchanged) */}
      <Box className="logo-section">
        <img
          src="/image/tsmc.png" // Replace with the correct path to your logo
          alt="Company Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section (unchanged) */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            TSMC Internship: Enhancing FNO Model for AMRS-DB
          </Typography>
          <Typography variant="body1" className="section-description">
            Worked on improving defect detection in AMRS-DB using the Fourier Neural Operator (FNO) model.
            Focused on model enhancements to reduce error rates and improve accuracy in identifying
            defects and non-defects.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Position</Typography>
              <Typography variant="body2" className="overview-value">
                Software Engineer Intern
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                June 2024 - August 2024
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">🔧 Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                Python, TensorFlow, FNO, Jupyter
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Horizontal Sections for Introduction and Goals (unchanged) */}
      <Box className="intro_goal_container">
        <Box className="horizontal-section-container">
          <Box className="horizontal-section">
            <Typography variant="h5" className="section-title">📖 Introduction</Typography>
            <Typography variant="body1" className="section-description">
              AMRS-DB processes single-die images without reference dies, requiring GDS and defect images
              to generate comparison references. My work focused on improving defect detection and
              reducing nuisance from non-defect areas.
            </Typography>
          </Box>
          <Box className="horizontal-section">
            <Typography variant="h5" className="section-title">🎯 Project Goals</Typography>
            <Typography variant="body1" className="section-description">
              To evaluate FNO-ST model behavior on AMRS-DB and optimize it for best results. Experiments
              aimed to improve defect detection accuracy and minimize L1 edge errors.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*
        =================================================================
        START OF NEW CONTENT (replaces old “Experiments and Methods” etc.)
        =================================================================
      */}

      {/* 1. AMRS-DB Introduction (DARK BACKGROUND) */}
     {/* AMRS-DB Introduction (Dark Background) */}
{/* AMRS-DB Introduction (Dark Background) */}
{/* AMRS-DB Introduction (Dark Background) */}
<Box className="impact-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
    📔 AMRS-DB Introduction
    </Typography>
    
    <Grid container spacing={4}>
      {/* Left Column: Die Die (DD) */}
      <Grid item xs={12} md={6}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Die Die (DD)
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ flexWrap: 'nowrap' }}
        >
          {/* DD Image */}
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/image/dd.png" // Replace with your actual path for dd.png
              alt="Die Die (DD)"
              style={{ width: '120px', height: 'auto' }}
            />
          </Grid>
          {/* DD Text */}
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <ul style={{ margin: 20, padding: 0,  }}>
                <li>Multi - Die (DD)</li>
                <li>Use other die as reference</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Right Column: DB */}
      <Grid item xs={12} md={6}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          DB
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{ flexWrap: 'nowrap' }}
        >
          {/* DB Image */}
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/image/db.png" // Replace with your actual path for db.png
              alt="DB Image"
              style={{ width: '120px', height: 'auto' }}
            />
          </Grid>
          {/* DB Text */}
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <ul style={{ margin:20, padding: 0 }}>
                <li>Single Die</li>
                <li>No reference die to compare</li>
                <li>
                  Use GDS and defect images to generate reference images instead
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    {/* Bottom Section (directly below the horizontal Grid) */}
    <Box sx={{ marginTop: '2rem' }}>
      <ul>
        <li>
          <strong>Current FNO-ST Challenges:</strong>
          <ul>
            <li>Nuisance Reduction</li>
            <li>Defect Detection</li>
          </ul>
        </li>
        <li>
          <strong>Project Summary:</strong>
          <ul>
            <li>Explore FNO-ST model behavior on AMRS-DB</li>
            <li>
              Implement two main training methods and five model architectures (15+ experiments)
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  </div>
</Box>



      {/* 2. Best N5 VG/VD Status (WHITE BACKGROUND) */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🏆 Best N5 VG/VD Status
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>
              <strong>Defect Area:</strong>
              <ul>
                <li>Shows how well the model catches defects</li>
                <li>Max/Min CD error w/r/t DD is ±3%</li>
              </ul>
            </li>
            <li>
              <strong>Non-Defect Area:</strong>
              <ul>
                <li>Shows how well the model reduces nuisance</li>
                <li>CD error ±5%</li>
              </ul>
            </li>
          </ul>
        </div>
      </Box>

      {/* 3. Techniques Attempted (DARK BACKGROUND) */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🗂️ Techniques Attempted and Their Results
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>
              <strong>Nuisance Reduction:</strong>
              <ul>
                <li>Intensity Augmentation</li>
                <li>Tool Features Concatenation</li>
              </ul>
            </li>
            <li>
              <strong>Defect Detection:</strong>
              <ul>
                <li>Batch Normalization vs Instance Normalization</li>
                <li>Synthetic Defect</li>
    
              </ul>
              
            </li>
            <li>
            <strong>Model Behavior Observation:</strong>
              <ul>
                <li>Down Sampling</li>
                <li>Skip Connection</li>
              </ul>
            </li>
          </ul>
        </div>
      </Box>

      {/* 4. Concatenating Tool Features (WHITE BACKGROUND) */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ✂️ Concatenating Tool Features to Decoder’s 1st Layer Output
          </Typography>
          <Typography variant="body1">
            <strong>Hypothesis:</strong> Tool image features provide valuable contextual information.
            Similar to skip connections, we concatenate tool features (from the tool encoder) into the
            first layer of the decoder.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <strong>Overall Performance:</strong>
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Both defect and non-defect areas rendered poorly</li>
            <li>The entire image highlights defect and non-defect areas too strongly</li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <strong>Potential Reasons:</strong>
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Increased overfitting</li>
            <li>Reduced generalizability</li>
            <li>Overpowering original features</li>
          </ul>
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          Without Tool Feature Concatenation
        </Typography>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/concat1.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
    <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          With Tool Feature Concatenation
        </Typography>
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/concat2.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
        </div>
      </Box>

      {/* 5. Batch Normalization vs. Instance Normalization (DARK BACKGROUND) */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ⚔️ Batch Normalization vs. Instance Normalization
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Batch Normalization
          </Typography>
          <ul>
            <li>Computes mean/std across channels for the entire mini-batch</li>
            <li>All previous experiments used batch normalization</li>
          </ul>

          <Typography variant="body1" sx={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
            Instance Normalization
          </Typography>
          <ul>
            <li>Computes mean/std for each channel on a single instance</li>
            <li>Provides consistent performance across different batch sizes</li>
            <li>Helps the model adapt to individual sample characteristics</li>
          </ul>

          <Typography variant="body1" sx={{ marginTop: '1.5rem' }}>
            <strong>Overall Performance:</strong>
          </Typography>
          <ul>
            <li>Instance performed better on defect areas</li>
            <li>Batch performed better on non-defect areas</li>
            <li>Overall, Batch performed better</li>
          </ul>
          <Typography variant="body1">
            <strong>Potential Reasons:</strong> Instance Norm focused too heavily on individual samples,
            increasing the risk of overfitting.
          </Typography>
        </div>
      </Box>

      {/* 6. Synthetic Defect on Regular Area (WHITE BACKGROUND) */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🎛️ Synthetic Defect on Regular Area
          </Typography>
          <Typography variant="body1">
            <strong>Hypothesis:</strong> The inclusion of synthetic defects could enhance defect
            detection accuracy by simulating additional real-world scenarios.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <strong>Overall Performance:</strong>
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Model did not improve on defect areas</li>
            <li>Both defect and non-defect areas were rendered poorly</li>
            <li>Incorrect highlighting in various parts of the image</li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <strong>Potential Reasons:</strong>
          </Typography>
          <ul style={{ marginLeft: '1.5rem' }}>
            <li>Synthetic defects differ from actual defects, causing imbalance</li>
            <li>Model became biased toward synthetic defect patterns</li>
          </ul>
          <Typography variant="body1" sx={{ marginTop: '1rem' }}>
            <strong>Possible Future Solution:</strong> Control the proportion of synthetic defects to
            prevent overfitting.
          </Typography>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/adain_diagram.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
        </div>
      </Box>

      {/* 7. AdaIN Introduction (DARK BACKGROUND) */}
      {/* 7. AdaIN Introduction (Dark Background) */}
<Box className="impact-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      📓 AdaIN Introduction
    </Typography>
    
    <Typography variant="body1">
      <strong>Adaptive Instance Normalization (AdaIN)</strong> is a technique for arbitrary style
      transfer, aligning the statistical properties of the content feature maps with those of the
      style feature maps:
    </Typography>

    {/* AdaIN Formula Image */}
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/adain_formula.png" // replace with your actual path
        alt="AdaIN Formula"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>

    {/* Style Transfer Diagram */}
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/adain_diagram.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>

    <Box sx={{ marginTop: '1.5rem' }}>
      <Typography variant="body1">
        <ul>
          <li>
            <strong>Encoder:</strong> Extracts content features from the content image and style features
            from the style image.
          </li>
          <li>
            <strong>AdaIN:</strong> Aligns the mean and variance of the content features to match those of
            the style features.
          </li>
          <li>
            <strong>Decoder:</strong> Reconstructs the final stylized image from the AdaIN-transformed features.
          </li>
          <li>
            <strong>Loss Functions (L<sub>c</sub> and L<sub>s</sub>):</strong> Ensures the generated image
            preserves the original content while adopting the desired style.
          </li>
          <li>
            <strong>In Our Case:</strong> The “die die” image acts as the style, and the DB image is the input. 
            By going through AdaIN, we aim to make the DB image “learn” the die die image and highlight the 
            defect area.
          </li>
        </ul>
      </Typography>
    </Box>
  </div>
</Box>


      {/* 8. Adding AdaIN Between Every Layer in the Decoder (WHITE BACKGROUND) */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🧮 Adding AdaIN Between Every Layer in the Decoder
          </Typography>
          <Typography variant="body1">
            <strong>Hypothesis:</strong> One layer of AdaIN might not be enough for nuisance reduction.
            Instead of only outputting mean/std from the final layer, compute them at <em>each</em> layer
            of the tool encoder and feed those stats into each AdaIN block in the decoder.
          </Typography>
          <ul style={{ marginTop: '1rem', marginLeft: '1.5rem' }}>
            <li>AdaIN in the First Layer: [Insert Pic 1]</li>
            <li>AdaIN in Every Layer: [Insert Pic 2]</li>
          </ul>
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          AdaIn in First Layer Only
        </Typography>
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}></Box>
          <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/adain1.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
    <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        AdaIn in Every Layer
    </Typography>
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}></Box>
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src="/image/adain2.png" // replace with your actual path
        alt="AdaIN Style Transfer Diagram"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
        </div>
        
      </Box>

    </Box>
  );
};

export default ProjectDetailPage;
