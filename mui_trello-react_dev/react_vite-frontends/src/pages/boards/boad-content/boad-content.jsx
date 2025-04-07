import { Box } from '@mui/material'

import BoardListColumn from './board-list-column/board-list-column';

export default function BoardContent() {
  return (
    <>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <BoardListColumn />
      </Box>
    </>
  )
}