import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import {
  Avatar, Badge, Divider, ListItemIcon, Tooltip,
} from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import ChatIcon from '@mui/icons-material/Chat';

import useStyles from '../styles';

export default function NavBar({ accessToken, setAccessToken }) {
  const styles = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>
          <ModeOfTravelIcon fontSize="large" />
          <Typography variant="h5">
            <Link to="/" className={styles.logoLink}>
              Nomad
            </Link>
          </Typography>
        </div>
        {accessToken ? (
          <div className={styles.icon}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <ChatIcon />
              </Badge>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar />
                Profile Settings
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  setAccessToken('');
                  history.push('/');
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          ''
        )}
      </Toolbar>
    </AppBar>
  );
}
