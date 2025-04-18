import { Box, Button } from '@mui/material'
import BoardColumn from './columns/columns';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
export default function BoardListColumn({columns}) {
  return (
    <SortableContext items={columns?.map(column => column?._id)} strategy={horizontalListSortingStrategy}>
      <Box sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}>
        {
          columns?.map(column => (<BoardColumn key={column._id} column={column}/>) )
        }        
        <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '4px',
            backgroundColor: '#ffffff3d',
            height: 'fit-content'
          }}>
            <Button 
              sx={{
                color: 'white',
                width: '100%',
                pl: 2.5,
                py: 1,
              }} 
              startIcon={<NoteAddIcon />}>
                Add new column
            </Button>
        </Box>
      </Box>
    </SortableContext>
  );
}