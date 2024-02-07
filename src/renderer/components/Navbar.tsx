import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FaHamburger as MenuIcon } from 'react-icons/fa';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <NavLink to="/">
        <IconButton>
          <Typography>Home</Typography>
        </IconButton>
      </NavLink>
      <NavLink to="/books">
        <IconButton>
          <Typography>Books</Typography>
        </IconButton>
      </NavLink>
    </>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>Electron Anime App</Typography>
        {isMobile ? (
          <>
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={drawerOpen} onClick={() => toggleDrawer(false)}>
              <List>
                <ListItem>{menuItems}</ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          menuItems
        )}
      </Toolbar>
    </AppBar>
  );
}
