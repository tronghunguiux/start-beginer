import { Box } from '@mui/material';
import Container from '@mui/material/Container'
import AppBar from '~/layouts/appbar';
import BoardBar from '~/components/board-bar';
import BoardContent from '~/components/boad-content';

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