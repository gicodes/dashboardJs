import { 
  MailSharp,
  SearchSharp, 
  AddCircleSharp,
  NightsStaySharp, 
} from '@mui/icons-material'
import { Badge, Box, Stack } from '@mui/material';
import ShowAlert from './alert';
import { useState } from 'react';


const Header = () => {
  const [ showAlert, setShowAlert ] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <Box 
      padding={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    > 
      <Badge onClick={handleClick} className='mx-2'>
        <SearchSharp />
      </Badge>
      
      <Stack
        direction={'row'}
        margin={'0 2% 0'}
        spacing={5}
      > 
        <Badge onClick={handleClick}>
          <AddCircleSharp color='action' />
        </Badge>

        <Badge onClick={handleClick}>
          <NightsStaySharp />  
        </Badge>
        
        <Badge onClick={handleClick} badgeContent={3} color="primary">
          <MailSharp color="action" />
        </Badge>
      </Stack>

      {showAlert && <ShowAlert />}
    </Box>
  )
}

export default Header