import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {Box, Drawer, CssBaseline,Toolbar,Typography,List,Divider,ListItem, ListItemIcon,ListItemText,IconButton}from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';


// const useStyles = makeStyles({
//     BAR: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 48,
//       padding: '0 30px',
//     },
//   });

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.9),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const theme = createTheme({
    palette : {
        primary: {
            main: green[100],
        },
        secondary: {
            main: purple[500],
          },
    }
})



const pages = ['PATIENTS', 'CALENDER', 'USERS', "BILLING"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles = makeStyles((theme) => 
    createStyles({
    root: {
      paddingLeft: 300
    },
    appBar: {
        paddingLeft: 30
    },
    drawer: {
      width: 250,
      background: "#E8F5FE"
    },
    
  }));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();
    
  

  return (
    <div className={classes.root}>
        <CssBaseline />
    <ThemeProvider theme={theme}>
    <AppBar position="fixed" color="primary" className={classes.appBar} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            H3A
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 4, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <IconButton
              size="large"
              color="inherit"
            >
            <NotificationsIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      
    </AppBar>
    <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
        <Toolbar />
        <Toolbar />
        <List disablePadding className={classes.drawer}>
            <Typography  variant='body1' > PATIENTS</Typography>
            <Divider/>
            <>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Patients…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </>
          <ListItem button >
            <Avatar>S</Avatar>
            <ListItemText primary="Sara Simth" secondary="15 Aug 2020" />
            <Brightness1RoundedIcon sx={{ color: green[500] }} fontSize="small"/>
          </ListItem>
          <ListItem button >
            <Avatar>J</Avatar>
            <ListItemText primary="James won" secondary="No clearance" />
            <Brightness1RoundedIcon sx={{ color: '#FF462C' }} fontSize="small"/>
          </ListItem>
          <ListItem button >
            <Avatar>R</Avatar>
            <ListItemText primary="Ron Hammer" secondary="19 Aug 2020"/>
            <Brightness1RoundedIcon sx={{ color: green[500] }} fontSize="small"/>
          </ListItem>
          <ListItem button >
            <Avatar>W</Avatar>
            <ListItemText primary="Willy methu" secondary="21 Aug 2020"/>
            <Brightness1RoundedIcon sx={{ color: green[500] }} fontSize="small"/>
          </ListItem>
        </List>
      </Drawer>
      </ThemeProvider>
    </div>
    
  );
};
export default ResponsiveAppBar;
