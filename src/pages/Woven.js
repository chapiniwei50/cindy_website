import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import './Woven.css';

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/woven.png"
          alt="Woven by Toyota Logo"
          className="woven-company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Woven by Toyota (Arene)
          </Typography>
          <Typography variant="body1" className="section-description">
            As a Software Engineer Intern on the Arene team, I led the design and development of a cross-platform desktop tool for log ingestion and visualization, streamlining developer workflows in autonomous driving software. My contributions focused on performance, reliability, and user experience across CLI, GUI, and real-time components.
          </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👨‍💻 Position</Typography>
              <Typography variant="body2" className="overview-value">Software Engineer Intern</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">May 2025 - August 2025</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">🔧 Tools Used</Typography>
              <Typography variant="body2" className="overview-value">Electron, Python, WebSocket, TypeScript, Node.js, Yarn Workspaces</Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* Desktop App Section */}
      <Box className="experiment-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🖥️ Project 1: Cross-Platform Desktop Application
          </Typography>
          <Typography variant="body1" className="section-description">
            Developed an Electron-based application for Arene developers to analyze MCAP logs, replacing outdated tools with a streamlined, offline-first solution.
          </Typography>
          <ul className="experiment-list">
            <li><strong>Packaged Binary:</strong> Fully bundled `.app`, `.exe`, and AppImage builds with extension sandboxing and Foxglove layout support.</li>
            <li><strong>Extension Management:</strong> CLI and runtime tooling for loading prebuilt `.foxe` extensions and verifying SHA256 checksums.</li>
            <li><strong>CLI File Loading:</strong> Enabled support for opening MCAP and JSON layout files directly from the command line or file handler.</li>
            <li><strong>Installer Automation:</strong> Configured `electron-builder` and notarization for seamless cross-platform distribution.</li>
          </ul>
        </div>
      </Box>

      {/* Real-Time Streaming */}
      <Box className="experiment-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🔄 Project 2: Real-Time Log Replay and WebSocket Streaming
          </Typography>
          <Typography variant="body1" className="section-description">
            Implemented a Python-based Foxglove WebSocket server to replay log files in real time, emulating autonomous vehicle scenarios.
          </Typography>
          <ul className="experiment-list">
            <li><strong>Log Parser:</strong> Parsed structured logs from multiple modules with support for multiple timestamp formats and delay simulation.</li>
            <li><strong>Foxglove Protocol:</strong> Broadcast structured messages over WebSocket using `foxglove-websocket` server implementation.</li>
            <li><strong>Channel Segmentation:</strong> Dynamically created Foxglove channels per module for granular analysis and UI visualization.</li>
            <li><strong>Stream Scheduler:</strong> Scheduled payloads with artificial startup delay and accurate timestamp alignment for synchronized playback.</li>
          </ul>
        </div>
      </Box>

      {/* CLI + Automation */}
      <Box className="experiment-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ⚙️ Project 3: Command-Line and Automation Pipelines
          </Typography>
          <Typography variant="body1" className="section-description">
            Designed powerful CLI features and automated data pipelines to accelerate the development and debugging process.
          </Typography>
          <ul className="experiment-list">
            <li><strong>Headless Ingestion:</strong> Added support for `--open-file`, `--open-layout-file`, and native layout loading via CLI.</li>
            <li><strong>Log Transformation:</strong> Spawned a Rust-based `mcapper` binary as a subprocess to convert plain logs into MCAP streams.</li>
            <li><strong>Persistent Layouts:</strong> Enabled default layout caching and workspace state restoration for user sessions.</li>
            <li><strong>CI/Packaging:</strong> Created scripts to bundle all dependencies, preload scripts, and extensions for distribution builds.</li>
          </ul>
        </div>
      </Box>
      
      {/* Mosaic Transformer Section */}
<Box className="experiment-section">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🧱 Project 4: Mosaic Transformer - Universal File to MCAP Converter
    </Typography>

    <Typography variant="body1" className="section-description">
      Designed and implemented a modular transformation tool that ingests various supported log formats and standardizes them into MCAP for streamlined ingestion and replay within Arene’s developer tools.
    </Typography>

    <ul className="experiment-list">
      <li>
        <strong>Format Agnostic:</strong> Supports JSON, plain text, and binary log files with extensible parsers.
      </li>
      <li>
        <strong>Timestamp Normalization:</strong> Automatically infers and aligns message timestamps across multiple file formats.
      </li>
      <li>
        <strong>MCAP Packaging:</strong> Leverages MCAP writer APIs to generate properly structured output files with schema validation.
      </li>
      <li>
        <strong>Transformer Plug-In System:</strong> Architected system to support new file formats via isolated transformer modules with minimal integration overhead.
      </li>
    </ul>
  </div>
</Box>


      {/* Technical Achievements */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🚀 Technical Achievements
          </Typography>
          <Typography variant="body1" className="section-description">
            <strong>🎯 Unified Developer Workflow:</strong> Centralized all log tools into a single, cohesive application<br/>
            <strong>🔁 Seamless Replay:</strong> Enabled real-time replay of log data for developers without physical hardware<br/>
            <strong>📦 Fully Bundled Builds:</strong> Successfully distributed signed, offline-ready app bundles for internal use<br/>
            <strong>📊 Debug-First UX:</strong> Designed with developer experience in mind—progress bars, error toasts, and trace logging built-in
          </Typography>
        </div>
      </Box>

      

      {/* Lessons Learned */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ⭐️ Lessons Learned
          </Typography>
          <Typography variant="body1" className="section-description">
            This internship taught me how to build production-grade tools that integrate deeply into complex automotive ecosystems. I gained extensive experience in cross-platform development, binary distribution, log ingestion pipelines, and the fast-paced debugging culture of embedded software teams.
          </Typography>
        </div>
      </Box>

      {/* Overall Experience */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🎊 Overall Experience
          </Typography>
          <Typography variant="body1" className="section-description">
            My internship at Woven by Toyota was a transformative experience. I had the opportunity to contribute full-stack solutions that were used daily by autonomous vehicle developers, and I left with a deeper appreciation for tool-building, developer empathy, and the critical role of log systems in AV development.
          </Typography>
        </div>
      </Box>
    </Box>



  );
};

export default ProjectDetailPage;
