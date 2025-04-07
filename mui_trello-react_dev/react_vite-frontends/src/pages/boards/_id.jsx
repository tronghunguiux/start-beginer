import { Box } from '@mui/material';
import Container from '@mui/material/Container'
import AppBar from '~/layouts/appbar/appbar';
import BoardBar from '~/pages/boards/board-bar/board-bar';
import BoardContent from '~/pages/boards/boad-content/boad-content';

export default function Board() {

  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', }}>
        <AppBar />
        <BoardBar />
        <BoardContent />
      </Container>
    </>
  )
}