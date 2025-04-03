import ModeTheme from '~/layouts/mode-theme'
import { Box } from '@mui/material';

export default function AppBar() {
  return (
    <>
      {/* Top bar */}
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.topBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ModeTheme />
      </Box>
      

    </>
  )
}