import React from 'react'
import { Box, Divider, Menu, MenuItem, Typography, Fade, ListItemText, ListItemIcon, Tooltip, Button } from '@mui/material'

import { ContentCut, ContentCopy, ContentPaste, Cloud } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListCard from './list-card/list-card';
import { mapOrder } from '~/utils/sorts'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const COLUMN_H_HEADER = (theme) => (theme.trello.columnHeaderHeight);
const COLUMN_H_FOOTER = (theme) => (theme.trello.columnFooterHeight);

export default function BoardColumn({column}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column },
  })
    
  const DndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined,
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget) };
  const handleClose = () => { setAnchorEl(null) };

  const orderCard = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  
  return (
    <>
    <div ref={setNodeRef} style={DndKitColumnStyles} {...attributes}>
      <Box {...listeners} 
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          minWidth: '300px',
          maxWidth: '300px',
          ml: 2,
          height: 'fit-content',
          borderRadius: '8px',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
        }}
      >
        {/* Header */}
        <Box sx={{
          width: '100%',
          height: COLUMN_H_HEADER,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box sx={{ flex: '1 0 0' }}>
            <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>{column?.title}</Typography>
          </Box>
          <Box>
            <Tooltip title="More action" placement="top">
              <ExpandMoreIcon
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

                sx={{
                  color: 'text.primary',
                  cursor: 'pointer',
                }} />
            </Tooltip>
            <Menu
              id="basic-menu-column-dropdown"
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}>
              <MenuItem onClick={handleClose}>
                <ListItemIcon> <AddCardIcon fontSize="small" /> </ListItemIcon>
                <ListItemText>Add New Card</ListItemText>
                {/* <Typography variant="body2" color="text.secondary"> ⌘X </Typography> */}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon> <ContentCut fontSize="small" /> </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                {/* <Typography variant="body2" color="text.secondary"> ⌘X </Typography> */}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon> <ContentCopy fontSize="small" /> </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                {/* <Typography variant="body2" color="text.secondary"> ⌘C </Typography> */}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon> <ContentPaste fontSize="small" /> </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                {/* <Typography variant="body2" color="text.secondary"> ⌘V </Typography> */}
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>remove card</ListItemText>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>archive card</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        {/* List Card */}
        <ListCard cards={orderCard}/>
        {/* Footer */}
        <Box sx={{
          width: '100%',
          height: COLUMN_H_FOOTER,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box sx={{ flex: '1 0 0', pr: 1 }}>
            <Button startIcon={<AddCardIcon />} sx={{ width: '100%', justifyContent: 'flex-start' }}> Add new card</Button>
          </Box>
          <Tooltip title={'draft to move'}>
            <DragHandleIcon sx={{
              cursor: 'pointer',
            }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
    </>
  );
}