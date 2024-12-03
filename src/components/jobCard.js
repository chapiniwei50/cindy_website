import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CardComponent = ({ title, role, date, date2, description, imageSrc, link }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: 260, // Make the card wider
          height: 370, // Make the card taller
          margin: '20px',
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '15px',
          border: 'none',
          backgroundColor: 'white', // Set the background to white
          position: 'relative',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
      >
        {/* Image container with fixed size */}
        <Box 
          sx={{ 
         
            backgroundColor: 'gray', 
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px',
            display: 'flex', 
            justifyContent: 'center', // Center the image
            alignItems: 'center', // Center the image
          }}
        >
          <img 
            src={imageSrc} 
            alt="Project" 
            style={{
              width: '300px', // Fixed width for the image
              height: '160px', // Fixed height for the image
              objectFit: 'cover', // Ensures the image covers the fixed size without distortion
            }} 
          />
        </Box>

        {/* Title, Role, and Description */}
        <Box sx={{ padding: '20px', flex: 1 }}>
          <Typography variant="h6" component="div" sx={{ color: 'black' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', marginTop: '10px' }}>
            {role}
          </Typography>
        
          <Typography variant="body2" sx={{ paddingTop: '10px', color: 'black', fontSize: '12px' }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default CardComponent;
