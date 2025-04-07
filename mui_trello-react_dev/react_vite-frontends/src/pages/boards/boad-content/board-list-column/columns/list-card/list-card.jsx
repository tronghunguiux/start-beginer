import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import BoardCard from './card/card';

// const COLUMN_H_HEADER = (theme) => (theme.trello.columnHeaderHeight);
// const COLUMN_H_FOOTER = (theme) => (theme.trello.columnFooterHeight);

// const COLUMN_H_HEADER = '50px';
// const COLUMN_H_FOOTER = '56px';

export default function ListCard() {
  return (
    <>
      {/* List Card */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
      }}>
        <BoardCard/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
        <BoardCard temporaryHeightMedia/>
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
      </Box>
    </>
  );
}