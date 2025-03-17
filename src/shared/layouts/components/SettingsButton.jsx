import { Badge, IconButton, SvgIcon } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

/* Button for global theme settings */
const SettingsButton = () => {
  return (
    <IconButton
      aria-label="settings-button"
      sx={{ p: 0, width: 40, height: 40 }}
    >
      <Badge color="error" variant="dot" invisible={false}>
        <SvgIcon
          viewBox="0 0 24 24"
          component={motion.svg}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
        >
          <path
            fill="currentColor"
            d="M16,18.928c0.678-0.391,1.459-0.424,2.135-0.164c0.564,0.217,1.209,0.037,1.592-0.43	c0.683-0.833,1.234-1.778,1.621-2.805c0.221-0.587,0.012-1.232-0.467-1.638C20.342,13.437,20,12.761,20,12	c0-0.761,0.342-1.437,0.88-1.893c0.479-0.406,0.689-1.05,0.467-1.638c-0.387-1.026-0.937-1.972-1.621-2.805	c-0.383-0.467-1.028-0.647-1.592-0.43C17.459,5.496,16.678,5.463,16,5.072c-0.68-0.393-1.1-1.056-1.21-1.775	c-0.09-0.588-0.556-1.058-1.143-1.158C13.111,2.048,12.561,2,12,2s-1.111,0.048-1.647,0.139C9.766,2.239,9.301,2.709,9.21,3.297	C9.1,4.016,8.68,4.679,8,5.072C7.322,5.463,6.541,5.496,5.865,5.235c-0.564-0.217-1.209-0.037-1.592,0.43	C3.59,6.498,3.04,7.443,2.653,8.47C2.431,9.057,2.641,9.702,3.12,10.107C3.658,10.563,4,11.239,4,12c0,0.761-0.342,1.437-0.88,1.893	c-0.479,0.406-0.689,1.05-0.467,1.638c0.387,1.026,0.937,1.972,1.621,2.805c0.383,0.467,1.028,0.647,1.592,0.43	C6.541,18.504,7.322,18.537,8,18.928c0.68,0.393,1.1,1.056,1.21,1.775c0.09,0.588,0.556,1.058,1.143,1.158	C10.889,21.952,11.439,22,12,22s1.111-0.048,1.647-0.139c0.587-0.099,1.053-0.569,1.143-1.158C14.9,19.984,15.32,19.321,16,18.928z"
            opacity=".35"
          ></path>
          <path
            fill="currentColor"
            d="M12,8c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S14.209,8,12,8z"
          ></path>
        </SvgIcon>
      </Badge>
    </IconButton>
  );
};

export default SettingsButton;
