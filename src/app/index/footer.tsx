import { 
  Instagram,
  GitHub, 
  X,
  LinkedIn, 
} from '@mui/icons-material'
import { Box, } from '@mui/material';
import Link from 'next/link';

// The footer samples some external links
// It is a child to the Home Page for simplicity sake
const Footer = () => {
  return (
    <Box 
      padding={2}
      columnGap={5}
      marginBottom={4}
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    > 
      <Link href='https://github.com/gicodes'>
        <GitHub />
      </Link>
      <Link href='https://www.linkedin.com/in/gideon-iduma-5311445a/'>
        <LinkedIn />
      </Link>
      <Link href='https://x.com/pappichino'>
        <X />
      </Link>
      <Link href='https://instagram.com/pappichino'>
        < Instagram/>
      </Link>
    </Box>
  )
}

export default Footer