import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Typography from "@material-ui/core/Typography";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

function Navbar() {
  const [state, setState] = React.useState(false);
  const [menuState, setMenuState] = React.useState(null);
  const acMenu = Boolean(menuState);

  // For handling menu links and menu
  const handleMenuClick = (event) => {
    setMenuState(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuState(null);
  };

  // For handling drawer open and close
  const toggleDrawer = (open) => (event) => {
    // Except keys
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  // Show the list of Drawer links
  const list = () => {
    return (
      <div
        className='Sidebar'
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <IconButton
          aria-label='account of current user'
          aria-controls='fade-menu'
          aria-haspopup='true'
          color='inherit'
          className='avatar'
        >
          <Avatar alt='Mdjack' src='/images/avatar.png' />
        </IconButton>
        <List>
          {/* Analytics  */}
          <ListItem button>
            <ListItemIcon>
              <EqualizerOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Analytics' />
          </ListItem>
          {/* Spend money  */}
          <ListItem button>
            <ListItemIcon>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Spend Money' />
          </ListItem>
        </List>
        <Divider />
      </div>
    );
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {/* Sidebar items  */}
          <SwipeableDrawer
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
          {/* To separate them  */}
          <span style={{ flex: 1 }} />
          <IconButton
            aria-label='more'
            aria-controls='long-menu'
            aria-haspopup='true'
            style={{ color: 'white' }}
            onClick={handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          {/* Menu Items  */}
          <Menu
            id='fade-menu'
            anchorEl={menuState}
            keepMounted
            open={acMenu}
            onClose={handleMenuClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleMenuClose}>
              <IconButton>
                <AccountCircleRoundedIcon />
              </IconButton>
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
            <IconButton>
                <ExitToAppRoundedIcon />
              </IconButton>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
