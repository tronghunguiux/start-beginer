import { Box, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CHIPTAG_STYLES = {
  color: 'primary.main',
  paddingX: '5px',
  border: 'none',
  bgcolor: 'white',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': { color: 'primary.main' },
  '&:hover': { bgcolor: 'primary.50' }
}
const AVATAR_STYLES = {
  width: '34px', height: '34px', fontSize: '1rem'
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
        borderTop: '1px solid #00bfa5'
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
          <Button variant='outlined' startIcon={<PersonAddIcon/>}>Invite</Button>
          <AvatarGroup
            // total={24}
            max={4}
            sx={{
              '& .MuiAvatar-root': AVATAR_STYLES
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