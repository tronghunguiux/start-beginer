import React from 'react'
import { Typography, Button } from '@mui/material'
import { CardActions, CardContent, CardMedia } from '@mui/material';
import { Card as MuiCard } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export default function BoardCard({card}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card },
  })
    
  const DndKitCarcStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  }

  const shouldCardBeVisible = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length;
  }
  return (
    <>
      {/* Card */}
      <MuiCard ref={setNodeRef} style={DndKitCarcStyles} {...attributes} {...listeners}
        sx={{
          cursor: 'pointer',
          boxShadow: 'none',
          overflow: 'unset',
        }}
      >
        {
          card?.cover && <CardMedia component="img" alt={card?.title} height="140" image={card?.cover} />
        }
        
        {
          card?.title && 
          <CardContent sx={{
            p: 1.5,
            '&:last-child': {
              paddingBottom: 1.5,
            }
          }}>
            <Typography> {card?.title} </Typography>
          </CardContent>
        }
        {
          shouldCardBeVisible() &&
          <CardActions sx={{
            p: '0 4px 8px 4px',
          }}>
            {
              !!card?.memberIds?.length && <Button startIcon={<GroupIcon />} size="small" >{card?.memberIds.length}</Button> 
            }
            {
              !!card?.comments?.length && <Button startIcon={<ModeCommentIcon />} size="small" >{card?.comments.length}</Button> 
            }
            {
              !!card?.attachments?.length && <Button startIcon={<AttachFileIcon />} size="small" >{card?.attachments.length}</Button> 
            }
          </CardActions>
        }
      </MuiCard>
    </>
  );
}