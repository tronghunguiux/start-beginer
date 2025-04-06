import React from 'react'
import { Box, Button, Divider, Menu, MenuItem, Fade, ListItemText, ListItemIcon} from '@mui/material'
import { Check } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function TemplatesBar() {
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
            id="fade-button-templates"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
            sx={{color: 'white'}}>
            Templates
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button-templates',
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