import { Box } from '@mui/material';

export default function BoardBar() {
  return (
    <>
    {/* Second bar */}
    <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.secondBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      </Box>
    </>
  )
}