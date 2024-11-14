import { Badge, Card, Stack } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import Badger from './utilities/badger';

const Hero2 = () => {
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
        bgcolor={'#e6e2d3'}     
        spacing={4} 
        padding={2}
      >
        <Badge className='badge-border'>
          <PaidIcon color='success'/>
        </Badge>
        <Badger text="Annual Revenue" value={"$30 - 40k"} />
      </Stack>

      <Stack 
        padding={2} 
        className='text-center dash-hero-info'
      >
        <h6>Web Dev</h6>
        <h6>Mobile Dev</h6>
        <h6>Cloud Hosting</h6>
      </Stack>
    </Card>
  )
}

export default Hero2;