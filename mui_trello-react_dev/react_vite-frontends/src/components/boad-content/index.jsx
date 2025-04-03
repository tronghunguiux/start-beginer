import { Box } from '@mui/material';

export default function BoardContent() {
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => `calc(100vh - (${theme.trello.topBarHeight} + ${theme.trello.secondBarHeight}))`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      </Box>
    </>
  )
}