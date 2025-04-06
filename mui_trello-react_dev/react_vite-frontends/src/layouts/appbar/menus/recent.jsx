/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { Box, Button, Divider, Menu, MenuItem, Typography } from '@mui/material'
import Fade from '@mui/material/Fade'
import { ContentCut, ContentCopy, ContentPaste, Cloud, Check } from '@mui/icons-material'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function RecentBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <div>
          <Button
            id="fade-button-recent"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
            sx={{color: 'white'}}>
            Recent
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button-recent',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>
              <ListItemText inset>Single</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemText inset>1.15</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemText inset>Double</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Check />
              </ListItemIcon>
              Custom: 1.2
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemText>Add space before paragraph</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemText>Add space after paragraph</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemText>Custom spacing...</ListItemText>
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </>
  )
}