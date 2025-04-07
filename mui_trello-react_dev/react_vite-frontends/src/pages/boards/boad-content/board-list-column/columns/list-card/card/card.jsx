import React from 'react'
import { Typography, Button } from '@mui/material'
import { CardActions, CardContent, CardMedia } from '@mui/material';
import { Card as MuiCard } from '@mui/material';

import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function BoardCard({temporaryHeightMedia}) {
  if(temporaryHeightMedia)
    return(
    <>
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: 'none',
        overflow: 'unset',
      }}>
        <CardContent sx={{
          p: 1.5,
          '&:last-child': {
            paddingBottom: 1.5,
          }
        }}>
          <Typography>
            Capybara test 01
          </Typography>
        </CardContent>
      </MuiCard>
    </>
  );
  return (
    <>
      {/* Card */}
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: 'none',
        overflow: 'unset',
      }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSX2PTJGstAMjvjMy7aPXfCeiYp5ctZjNT5VYvnOPgloGIb-X1SX67lfJ61uceXzTruVOhS_36RbbBBwtGEa8LeKTcExtmTfReidrPKXc"
        />
        <CardContent sx={{
          p: 1.5,
          '&:last-child': {
            paddingBottom: 1.5,
          }
        }}>
          <Typography>
            Capybara
          </Typography>
        </CardContent>
        <CardActions sx={{
          p: '0 4px 8px 4px',
        }}>
          <Button startIcon={<GroupIcon />} size="small">10</Button>
          <Button startIcon={<ModeCommentIcon />} size="small">15</Button>
          <Button startIcon={<AttachFileIcon />} size="small">20</Button>
        </CardActions>
      </MuiCard>
      {/* 
        <Card sx={{
          cursor: 'pointer',
          boxShadow: 'none',
          overflow: 'unset',
        }}>
          <CardContent sx={{
            p: 1.5,
            '&:last-child': {
              paddingBottom: 1.5,
            }
          }}>
            <Typography>
              Lizard
            </Typography>
          </CardContent>
        </Card>
        */}
    </>
  );
}