import { BusinessCenterSharp, Paid } from '@mui/icons-material';
import { Badge, Card, Stack } from '@mui/material';
import Badger from './badger';

const Hero1 = () => {
  return (
    <Card
      elevation={4}
      sx={{        
        width: {
          xs: '48%', 
          sm: '48%',
          md: '25%',
        },
      }}
    >
      <Stack              
        bgcolor={'#878f99'}
        spacing={4} 
        padding={2}
      >
        <Badge className='badge-border text-tertiary'>
          <BusinessCenterSharp color='inherit' />
        </Badge>
        <Badger text="Active Repos" value={'10 +'} />
      </Stack>

      <Stack 
        padding={2}
        className='text-center dash-hero-info'
      >
        <h6>github.com/gicodes</h6>
        <h6>netlify.com/gicodes</h6>
        <h6>vercel.com/gicodes</h6>
      </Stack>
    </Card>
  )
}

export default Hero1