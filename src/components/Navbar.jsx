import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const drawerWidth = 240;
const navItems = ['Inicio', 'Productos', 'Acerca de', 'Contacto'];
const navLinks = ['', 'products', 'about', 'contact'];

const MenuLink = styled(NavLink)`
  text-decoration: none;
  padding-right: 1.5rem;
  color: inherit;
  &:hover {
    color: #c48d8d;
  }
`;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Mi Tiendita
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <MenuLink key={item} to={navLinks[index]}>
                <ListItemText primary={item} />
              </MenuLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            Mi Tiendita
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <MenuLink
                key={item}
                to={navLinks[index]}
                style={({ isActive }) =>
                  isActive ? { color: '#ff3a3a', fontWeight: 'bold' } : undefined
                }>
                {item}
              </MenuLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

/* Navbar.propTypes = {

  window: propTypes.func,
}; */

export default Navbar;
