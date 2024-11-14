import { Paper, Stack } from '@mui/material';
import DashBarChart from './bar-chart';
import { MainSwitch } from './main-switch';
import { useState } from 'react';
import TechStack from './tech-stack';

export const DashMain = () => {
  const [ chart, setChart ] = useState(true);

  const handleSwitch = () => {
    setChart(!chart)
  } 

  return (
    <Paper 
      elevation={4}
      sx={{
        padding: '2%',
        width: {
          xs: '100%', 
          sm: '100%',
          md: '60%',
        },
        margin: 'auto',
        minHeight: '333px'
      }}
    >
      <Stack 
        display={'flex'}
        direction={'row'}
        justifyContent={'space-between'}
      >
        <h5 className='p-2'>
          <b>Technology Usage</b>
        </h5>

        <MainSwitch handleSwitch={handleSwitch} />
      </Stack>
      
      {chart ? <DashBarChart /> : <TechStack />}
    </Paper>
  )
}
