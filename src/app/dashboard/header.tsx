import { 
  MailSharp,
  SearchSharp, 
  AddCircleSharp,
  NightsStaySharp, 
} from '@mui/icons-material'
import { Badge, Box, Stack } from '@mui/material';

const Header = () => {
  return (
    <Box 
      padding={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    > 
      <SearchSharp />
      <Stack
        direction={'row'}
        margin={'0 2% 0'}
        spacing={5}
      > 
        <Badge>
          <AddCircleSharp color='action' />
        </Badge>
        <NightsStaySharp />
        <Badge badgeContent={4} color="primary">
          <MailSharp color="action" />
        </Badge>
      </Stack>
    </Box>
  )
}

export default Header