
import { Box, Button, Chip, Avatar,AvatarGroup, Tooltip } from '@mui/material';

// import icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CHIPTAG_STYLES = {
  color: 'white',
  paddingX: '5px',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '4px',
  '.MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgcolor: 'primary.50' },
}
const AVATAR_STYLES = {
  width: '34px', height: '34px', fontSize: '1rem', borderWidth: '1px', 
}

export default function BoardBar() {
  return (
    <>
      {/* Second bar */}
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.topBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2px',
        paddingX: 2,
        overflowX: 'auto',
        borderBottom: '1px solid white',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Chip icon={<DashboardIcon />} label={'dashboard icon'} onClick={() => ({})}
            sx={CHIPTAG_STYLES} />
          <Chip icon={<VpnLockIcon />} label={'public/private workspace'} onClick={() => ({})}
            sx={CHIPTAG_STYLES} />
          <Chip icon={<AddToDriveIcon />} label={'add to drive google'} onClick={() => ({})}
            sx={CHIPTAG_STYLES} />
          <Chip icon={<BoltIcon />} label={'Automation'} onClick={() => ({})}
            sx={CHIPTAG_STYLES} />
          <Chip icon={<FilterAltIcon />} label={'Filter'} onClick={() => ({})}
            sx={CHIPTAG_STYLES} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Button variant='outlined' startIcon={<PersonAddIcon/>} sx={{color: 'white', borderColor: 'white', '&:hover': {borderColor: 'white'}}}>Invite</Button>
          <AvatarGroup
            // total={24}
            max={4}
            sx={{
              gap: '10px',
              '& .MuiAvatar-root': {
                width: '34px',
                height: '34px',
                fontSize: '1rem',
                borderWidth: '1px',
                borderColor: 'white',
                borderStyle: 'solid',
                cursor: 'pointer',
              }
            }}
          >
            <Tooltip title="Remy Sharp">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={AVATAR_STYLES} />
            </Tooltip>
            <Tooltip title="Has Sharp">
              <Avatar alt="Has Sharp" src="/static/images/avatar/1.jpg" sx={AVATAR_STYLES} />
            </Tooltip>
            <Tooltip title="Tas Sharp">
              <Avatar alt="Tas Sharp" src="/static/images/avatar/1.jpg" sx={AVATAR_STYLES} />
            </Tooltip>
            <Tooltip title="Kasd Sharp">
              <Avatar alt="Kasd Sharp" src="/static/images/avatar/1.jpg" sx={AVATAR_STYLES} />
            </Tooltip>
            <Tooltip title="Laft Sharp">
              <Avatar alt="Laft Sharp" src="/static/images/avatar/1.jpg" sx={AVATAR_STYLES} />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  )
}