// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="link__header">
              Nomad
            </Link>
          </Typography>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon sx={{ fill: 'white' }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/mymaps" className="link">
                    My Maps
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/favoritemaps" className="link">
                    My Favourite Maps
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/newmap" className="link">
                    Create Map
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
