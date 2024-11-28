import { 
  WbSunny, 
  MailSharp,
  SearchSharp, 
  AddCircleSharp,
  NightsStaySharp, 
} from '@mui/icons-material'
import ShowAlert from './alert';
import { useState } from 'react';
import { Badge, Box, Stack } from '@mui/material';

interface HeaderProps {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  handleDarkMode,
  darkMode,
  // add other children properties or methods here
}) => {
  const [ showAlert, setShowAlert ] = useState(false);
  // controls the color of the icons as a sub-feature of darkMode
  const color = darkMode ? 'primary' : 'action';

  const handleDummyClick = () => {
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
      <Badge onClick={handleDummyClick} className='mx-2'>
        <SearchSharp color={color} />
      </Badge>
      
      <Stack
        direction={'row'}
        margin={'0 2% 0'}
        spacing={5}
      > 
        <Badge onClick={handleDummyClick}>
          <AddCircleSharp  color={color} />
        </Badge>

        <Badge onClick={handleDarkMode} style={{ cursor: "pointer" }}>
          {darkMode ? <WbSunny /> : <NightsStaySharp />}
      </Badge>
        
        <Badge onClick={handleDummyClick} badgeContent={3} color="primary">
          <MailSharp  color={color} />
        </Badge>
      </Stack>

      {showAlert && <ShowAlert />}
    </Box>
  )
}

export default Header