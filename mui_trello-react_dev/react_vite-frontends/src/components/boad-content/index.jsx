import React from 'react'
import { Box, Divider, Menu, MenuItem, Typography, Fade, ListItemText, ListItemIcon, Tooltip, Button } from '@mui/material'
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';

import { ContentCut, ContentCopy, ContentPaste, Cloud } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const COLUMN_H_HEADER = '50px';
const COLUMN_H_FOOTER = '56px';
export default function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget) };
  const handleClose = () => { setAnchorEl(null) };
  return (
    <>
      <Box sx={{
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <Box sx={{
          backgroundColor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}>
          <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            minWidth: '300px',
            maxWidth: '300px',
            ml: 2,
            height: 'fit-content',
            borderRadius: '8px',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          }}>
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
                <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Column Title</Typography>
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
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              p: '0 5px',
              m: '0 5px',
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
                ${theme.spacing(5)} - ${COLUMN_H_HEADER} - ${COLUMN_H_FOOTER})`,
            }}>
              <Card sx={{ 
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
                  <Button startIcon={<GroupIcon/>} size="small">10</Button>
                  <Button startIcon={<ModeCommentIcon/>} size="small">15</Button>
                  <Button startIcon={<AttachFileIcon/>} size="small">20</Button>
                </CardActions>
              </Card>
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
            </Box>
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
          <Box sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            minWidth: '300px',
            maxWidth: '300px',
            ml: 2,
            height: 'fit-content',
            borderRadius: '8px',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          }}>
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
                <Typography sx={{ fontWeight: 'bold', cursor: 'pointer' }}>Column Title</Typography>
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
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              p: '0 5px',
              m: '0 5px',
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - 
                ${theme.spacing(5)} - ${COLUMN_H_HEADER} - ${COLUMN_H_FOOTER})`,
            }}>
              <Card sx={{ 
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
                  <Button startIcon={<GroupIcon/>} size="small">10</Button>
                  <Button startIcon={<ModeCommentIcon/>} size="small">15</Button>
                  <Button startIcon={<AttachFileIcon/>} size="small">20</Button>
                </CardActions>
              </Card>
            </Box>
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
        </Box>
      </Box>
    </>
  )
}