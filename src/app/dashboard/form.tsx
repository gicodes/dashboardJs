import { 
  Grid2, 
  Radio,
  Button,
  Select,
  MenuItem,
  TextField,  
  FormLabel, 
  RadioGroup, 
  FormControl, 
  FormControlLabel,
  InputLabel,
  Box,
  Stack, 
} from '@mui/material';
import Card from '@mui/material/Card';

const DashMain2 = () => {
  return (
    <Card 
      elevation={4}
      sx={{
        padding: '1%',
        width: {
          xs: '100%', 
          sm: '100%',
          md: '36%',
        },
        margin: 'auto',
        minHeight: '333px',
      }}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData).entries());
          console.log(formJson);

          try {
            const response = await fetch('/api/send-feedback', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formJson),
            });
            const result = await response.json();
            if (response.ok) {
              alert('Feedback sent successfully!');
            } else {
              alert('Error sending feedback: ' + result.error);
            }
          } catch (error) {
            console.error('Error sending feedback:', error);
            alert('Failed to send feedback. Please try again.');
          }
        }}
      >
        <h5 className='text-center mt-6'>
          <b>Feedback Form </b>
          <span className='block typo-sm'>
            Please leave a review, I&#39;d appreciate
          </span>
        </h5>

        <Grid2 
          marginY={1} 
          padding={2}
        >
          <TextField  
            name="name"          
            className='w-100'
            variant="outlined"
            label="Hi, my name is Gid. What do I call you?" 
          />

          <Stack className='p-2 my-4'>
            <FormControl>
              <FormLabel> Do you like DashboardJs?</FormLabel>
              <RadioGroup row
                defaultValue="yes"
                name="rateMe"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel disabled value="maybe" control={<Radio />} label="Maybe" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Stack>
          
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel>What brought you to Dashboard?</InputLabel>
              <Select 
                value={"hiring"} 
                name="whatInterestsYou"
                label="What brought you to Dashboard?"
              >
                <MenuItem value="hiring">Hiring</MenuItem>
                <MenuItem value="paid Gig">Paid Gig</MenuItem>
                <MenuItem value="Just Random">Just Random</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField 
            name="yourRecon"
            variant="standard"
            className='w-100 my-2' 
            label="How do you think I can improve my work?" 
          />

          <Stack 
            justifyContent={'space-between'}
            direction={'row'}
            display={'flex'}
            marginTop={2}
          >
            <TextField
              className='w-50'
              variant='filled'
              name='email'
              label="Your e-mail please?"
            />
            <Button 
              variant='contained'
              type="submit"
            >
                Email me
            </Button>              
          </Stack>
        </Grid2>
      </form>
    </Card>
  )
}

export default DashMain2