import React from "react";
import { Box, Typography, Divider, Grid, Button } from "@mui/material";
import "./YeetAMole.css";

const ProjectDetailPage = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}

{/* Top Cover GIF Section */}
<Box className="logo-section cover-hero">
  <img
    src="https://github.com/user-attachments/assets/a4430dff-96c7-4934-b8bb-59a0ab6491c8"
    alt="Yeet-a-Mole Gameplay Cover"
    className="cover-hero-gif"
  />
</Box>



      {/* Title / Overview */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            Yeet a Mole 🐹🕳️🥊
          </Typography>

          <Typography variant="body1" className="section-description">
            <b>Yeet-a-Mole</b> is a fast-paced <b>VR wave-survival action game</b> built in{" "}
            <b>Unity</b> for <b>Meta Quest 3</b>. Defend your farm by turning moles into weapons
            through a physics-driven combat loop:
          </Typography>

        

          <Divider className="section-divider" />

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">
                👩🏻‍💻 Team
              </Typography>
              <Typography variant="body2" className="overview-value">
                Cindy Wei, Zhexu Luo, Joshua Zhang
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">
                ⏰ Timeline
              </Typography>
              <Typography variant="body2" className="overview-value">
                Nov 12, 2025 – Dec 11, 2025
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">
                🧰 Tech
              </Typography>
              <Typography variant="body2" className="overview-value">
                Unity 6 (6000.0.x), OpenXR, XR Interaction Toolkit, Meta Quest 3
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

      {/* GitHub CTA */}
<Box className="github-button-section">
  <div className="container github-cta">
    <Button
      variant="contained"
      color="primary"
      href="https://github.com/chapiniwei50/yeet-a-mole" 
      target="_blank"
      rel="noopener noreferrer"
      className="github-btn"
    >
      View on GitHub 👀
    </Button>
  </div>
</Box>


     

      {/* Demo Video */}
      <Box className="demo-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🎥 Full Gameplay Video
          </Typography>

          <div className="video-container">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/g-0qPlhva8I"
              title="Yeet-a-Mole Full Gameplay"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Box>

{/* Core Loop */}
<Box className="feature-section section-gray">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🔁 Core Combat Loop
    </Typography>

    <Typography variant="body1" className="section-description">
      A physics-driven loop that turns moles into ammo — charge it, then launch it back at enemies.
    </Typography>

    <div className="loop-wrap">
      {/* Step 1 */}
      <div className="loop-card">
        <div className="loop-top">
          <span className="step-badge">STEP 1</span>
          <span className="loop-emoji">🥊</span>
        </div>
        <h3 className="loop-title">Whack</h3>
        <p className="loop-desc">
          Hit regular moles to create <b>normal mole-balls</b>.
        </p>
      </div>

      <div className="loop-arrow" aria-hidden="true">→</div>

      {/* Step 2 */}
      <div className="loop-card">
        <div className="loop-top">
          <span className="step-badge">STEP 2</span>
          <span className="loop-emoji">🎾</span>
        </div>
        <h3 className="loop-title">Bounce</h3>
        <p className="loop-desc">
          Bounce mole-balls to <b>charge</b> them (yellow).
        </p>
      </div>

      <div className="loop-arrow" aria-hidden="true">→</div>

      {/* Step 3 */}
      <div className="loop-card">
        <div className="loop-top">
          <span className="step-badge">STEP 3</span>
          <span className="loop-emoji">🚀</span>
        </div>
        <h3 className="loop-title">Yeet</h3>
        <p className="loop-desc">
          Launch charged ammo to <b>damage enemies</b> before they breach.
        </p>
      </div>
    </div>

    {/* Optional mini summary bar */}
    <div className="loop-footer">
      <span className="loop-pill">Bat</span>
      <span className="loop-dot">•</span>
      <span className="loop-pill">Shovel</span>
      <span className="loop-dot">•</span>
      <span className="loop-pill">Racket</span>
      <span className="loop-dot">•</span>
      <span className="loop-pill">Whack → Bounce → Yeet</span>
    </div>
  </div>
</Box>


{/* Key Features */}
<Box className="feature-section section-white">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🎮 Key Features
    </Typography>

    <div className="features-grid">
      {/* Card 1 */}
      <div className="feature-card">
        <div className="feature-head">
          <span className="feature-icon">🧰</span>
          <h3 className="feature-title">Three-Tool Combat</h3>
        </div>

        <div className="feature-pills">
          <span className="feature-pill">Bat</span>
          <span className="feature-pill">Shovel</span>
          <span className="feature-pill">Racket</span>
        </div>

        <ul className="feature-list">
          <li><b>Bat</b> — Whack regular moles into ammo</li>
          <li><b>Shovel</b> — Safely dig up <b>explosive</b> moles</li>
          <li><b>Racket</b> — Bounce + Yeet charged mole-balls</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="feature-card">
        <div className="feature-head">
          <span className="feature-icon">🕺</span>
          <h3 className="feature-title">VR Physicality</h3>
        </div>

        <div className="feature-pills">
          <span className="feature-pill">Physics</span>
          <span className="feature-pill">Throwing</span>
          <span className="feature-pill">Parry</span>
        </div>

        <ul className="feature-list">
          <li>Physics-driven combat with real arm swings</li>
          <li>Natural throwing, batting, and digging interactions</li>
          <li>Projectile parrying with satisfying feedback</li>
        </ul>
      </div>
    </div>
  </div>
</Box>


     {/* Enemies & Boss */}
<Box className="feature-section is-dark">
  <div className="container">
    <Typography variant="h5" className="section-title">
      👾 Enemies & Boss
    </Typography>

    <Typography variant="body1" className="section-description">
      Players face increasingly dangerous enemy types before confronting the final boss.
    </Typography>

    {/* Enemy row */}
    <div className="enemy-row">
      {/* Walker */}
      <div className="enemy-card2">
        <div className="enemy-media">
          <img
            src="https://github.com/user-attachments/assets/d6bcb459-f38b-4ad6-83be-a2bbbcf3e27a"
            alt="Walker"
          />
        </div>
        <div className="enemy-body">
          <h4>Walker</h4>
          <p>Moderate speed melee enemy that pressures the player.</p>
          <div className="enemy-traits">
            <span className="trait">Weak to knockback</span>
            <span className="trait">Closes distance</span>
          </div>
        </div>
      </div>

      {/* Spitter */}
      <div className="enemy-card2">
        <div className="enemy-media">
          <img
            src="https://github.com/user-attachments/assets/6f5d4596-d0e9-4b8a-8203-90e9e652f30e"
            alt="Spitter"
          />
        </div>
        <div className="enemy-body">
          <h4>Spitter</h4>
          <p>Ranged enemy that forces movement and projectile awareness.</p>
          <div className="enemy-traits">
            <span className="trait">Ranged attacks</span>
            <span className="trait">Parry-able shots</span>
          </div>
        </div>
      </div>

      {/* Tank */}
      <div className="enemy-card2">
        <div className="enemy-media">
          <img
            src="https://github.com/user-attachments/assets/be6f3cb5-1d6c-4a27-8420-0e7bee81189e"
            alt="Tank"
          />
        </div>
        <div className="enemy-body">
          <h4>Tank</h4>
          <p>Armored unit designed to absorb damage and slow the player.</p>
          <div className="enemy-traits">
            <span className="trait">Armored</span>
            <span className="trait">Explosive damage only</span>
          </div>
        </div>
      </div>
    </div>

    {/* Final Boss */}
    <div className="boss-section">
      <div className="boss-media">
        <img
          src="https://github.com/user-attachments/assets/e0588d58-457e-46fe-947b-979fefe69827"
          alt="Final Boss"
        />
      </div>

      <div className="boss-content">
        <span className="pill">FINAL BOSS</span>
        <h3 className="boss-title">Multi-Phase Arena Controller</h3>
        <p className="boss-desc">
          The final boss combines teleportation, arena-control attacks, and
          enemy summons, forcing players to master spacing, timing, and
          tool-switching under pressure.
        </p>

        <div className="boss-abilities">
          <div className="ability">
            <span className="ability-dot" />
            <div>
              <strong>Boulder Throws</strong>
              <div className="ability-sub">Non-redirectable projectiles</div>
            </div>
          </div>

          <div className="ability">
            <span className="ability-dot" />
            <div>
              <strong>Explosive Mole Ring</strong>
              <div className="ability-sub">Creates hazardous arena zones</div>
            </div>
          </div>

          <div className="ability">
            <span className="ability-dot" />
            <div>
              <strong>Minion Waves</strong>
              <div className="ability-sub">Summons Walkers, Spitters, and Tanks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Box>


{/* Tutorial Rooms */}
<Box className="feature-section is-gray">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🧪 Tutorial Rooms
    </Typography>

    <Typography variant="body1" className="section-description">
      Before entering the main level, players complete <b>four guided tutorial rooms</b>
      designed to progressively teach the Whack → Bounce → Yeet loop.
    </Typography>

    <div className="tutorial-list">
      {/* ROOM 1 */}
      <div className="tutorial-item">
        <div className="tutorial-text">
          <span className="tutorial-tag">ROOM 1</span>
          <h3>Bat & Regular Moles</h3>
          <p>
            Learn the core interaction by whacking brown moles and turning them into
            basic mole-ball ammo.
          </p>
        </div>

        <video
          className="tutorial-video"
          src="/image/room1.mp4"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* ROOM 2 */}
      <div className="tutorial-item reverse">
        <div className="tutorial-text">
          <span className="tutorial-tag">ROOM 2</span>
          <h3>Explosive Moles & Shovel</h3>
          <p>
            Introduces red explosive moles and teaches safe handling using the shovel.
          </p>
        </div>

        <video
          className="tutorial-video"
          src="/image/room2.mp4"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* ROOM 3 */}
      <div className="tutorial-item">
        <div className="tutorial-text">
          <span className="tutorial-tag">ROOM 3</span>
          <h3>Mole-Balls & Racket</h3>
          <p>
            Players learn how to bounce mole-balls to charge them before yeeting
            them for maximum damage.
          </p>
        </div>

        <video
          className="tutorial-video"
          src="/image/room3.mp4"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* ROOM 4 */}
      <div className="tutorial-item reverse">
        <div className="tutorial-text">
          <span className="tutorial-tag">ROOM 4</span>
          <h3>Projectile Parrying</h3>
          <p>
            Teaches timing-based projectile parrying, preparing players for ranged
            enemies and the final boss.
          </p>
        </div>

        <video
          className="tutorial-video"
          src="/image/room4.mp4"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  </div>
</Box>



     {/* Technical Challenges */}
<Box className="feature-section section-gray">
  <div className="container">
    <Typography variant="h5" className="section-title">
      🛠️ Technical Challenges
    </Typography>

    <div className="challenges-grid">
      {/* Challenge 1 */}
      <div className="challenge-card">
        <div className="challenge-head">
          <span className="challenge-icon">⚡</span>
          <h3 className="challenge-title">High-Velocity Collision</h3>
        </div>

        <p className="challenge-desc">
          Fast VR swings caused mole-balls to visually connect but miss collision
          detection due to collider tunneling between physics updates.
        </p>

        <div className="challenge-footer">
          <span className="challenge-pill solved">Solved</span>
          <span className="challenge-note">
            Continuous sweep-volume collision replaced discrete checks
          </span>
        </div>
      </div>

      {/* Challenge 2 */}
      <div className="challenge-card">
        <div className="challenge-head">
          <span className="challenge-icon">🎯</span>
          <h3 className="challenge-title">Difficulty & Pacing Balance</h3>
        </div>

        <p className="challenge-desc">
          Early builds overwhelmed players with fast enemies and frequent explosive
          moles, making combat feel chaotic instead of skill-based.
        </p>

        <div className="challenge-footer">
          <span className="challenge-pill solved">Solved</span>
          <span className="challenge-note">
            Enemy speed reduced and explosive spawn rates tuned
          </span>
        </div>
      </div>

      {/* Challenge 3 */}
      <div className="challenge-card">
        <div className="challenge-head">
          <span className="challenge-icon">🧲</span>
          <h3 className="challenge-title">Physics Predictability</h3>
        </div>

        <p className="challenge-desc">
          Racket launch direction is highly sensitive to impact angle, and rare
          same-frame double collisions can cause unpredictable trajectories.
        </p>

        <div className="challenge-footer">
          <span className="challenge-pill partial">Partially Solved</span>
          <span className="challenge-note">
            Edge cases remain with multi-collision frames
          </span>
        </div>
      </div>
    </div>
  </div>
</Box>



      {/* Credits / Tools */}
<Box className="feature-section feature-section--last section-white">
  <div className="container">
    <Typography variant="h5" className="section-title">
      📦 Tools & Assets
    </Typography>

    <ul className="tools-list">
  <li>
    <strong>Unity XR Interaction Toolkit (XRI)</strong>
    <span className="tool-desc">
      Core VR interaction framework for grabbing, throwing, and controller-based input.
    </span>
    <a
      href="https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/manual/index.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Documentation ↗
    </a>
  </li>

  <li>
    <strong>ProBuilder</strong>
    <span className="tool-desc">
      Rapid level blocking and grayboxing for arena layout and fences.
    </span>
    <a
      href="https://unity.com/features/probuilder"
      target="_blank"
      rel="noopener noreferrer"
    >
      Unity Feature Page ↗
    </a>
  </li>

  <li>
    <strong>Fantasy Skybox FREE</strong>
    <span className="tool-desc">
      Stylized skybox textures for outdoor environment mood.
    </span>
    <a
      href="https://assetstore.unity.com/packages/2d/textures-materials/sky/fantasy-skybox-free-18353"
      target="_blank"
      rel="noopener noreferrer"
    >
      Asset Store ↗
    </a>
  </li>

  <li>
    <strong>Stylized Ground Textures</strong>
    <span className="tool-desc">
      Dirt and terrain textures sourced from Poly Haven / AmbientCG.
    </span>
  </li>

  <li>
    <strong>Kenney Assets (Nature & Town)</strong>
    <span className="tool-desc">
      Low-poly environmental props for background scenery.
    </span>
    <a
      href="https://kenney.nl/assets"
      target="_blank"
      rel="noopener noreferrer"
    >
      Kenney.nl ↗
    </a>
  </li>

  <li>
    <strong>TextMeshPro</strong>
    <span className="tool-desc">
      High-quality UI text rendering and layout.
    </span>
  </li>

  <li>
    <strong>3D Models (Sketchfab)</strong>
    <span className="tool-desc">
      Practice Dummy, Stylized Shovel, Baseball Bat, and Tennis Racket models.
    </span>
    <div className="tool-links">
      <a href="https://sketchfab.com/3d-models/practice-dummy-lowpoly-816d9b2b50524e6e803e9969505dcc9f" target="_blank" rel="noopener noreferrer">Dummy ↗</a>
      <a href="https://sketchfab.com/3d-models/stylized-shovel-86922c4c69244eccba28149c32c7dbd0" target="_blank" rel="noopener noreferrer">Shovel ↗</a>
      <a href="https://sketchfab.com/3d-models/baseball-bat-0028b77436394fd7963c013e04e69e70" target="_blank" rel="noopener noreferrer">Bat ↗</a>
      <a href="https://sketchfab.com/3d-models/tennis-racket-0825c82b87644a16a4852a40528b8c01" target="_blank" rel="noopener noreferrer">Racket ↗</a>
    </div>
  </li>

  <li>
    <strong>Sound Effects</strong>
    <span className="tool-desc">
      Gameplay and impact audio sourced from Freesound.
    </span>
    <a
      href="https://freesound.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Freesound ↗
    </a>
  </li>

  <li>
    <strong>Mole Models</strong>
    <span className="tool-desc">
      Stylized mole assets from MeshTint’s Cute Series.
    </span>
    <a
      href="https://www.meshtint.com/products/burrow-mole-rat-evolution-pack-cute-series"
      target="_blank"
      rel="noopener noreferrer"
    >
      MeshTint ↗
    </a>
  </li>
</ul>

  </div>
</Box>

    </Box>
  );
};

export default ProjectDetailPage;
