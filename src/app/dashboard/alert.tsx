import * as React from 'react';
import { Alert, Stack, useMediaQuery, useTheme } from '@mui/material';

export default function ShowAlert() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack 
      position={'fixed'} 
      top={'5%'}
      left={0}
      right={0}
      margin={'auto'}
      zIndex={9999} 
      spacing={2}
      width={isSmallScreen ? '99%' : '45%'}
      >
      <Alert 
        color="warning"
        variant="filled" 
        severity="success"  
        className='mx-auto'
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <p>Yay! it worked !!! Whatever, I am still a Dummy.</p>
      </Alert>
    </Stack>
  );
}