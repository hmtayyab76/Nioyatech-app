import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';  
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoonIcon from '@mui/icons-material/Brightness4';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const pages = ['About Us', 'Contact Us', 'Platforms', 'Solutions', 'Pricing'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <AppBar position="static" sx={{backgroundColor: 'white', borderBottom:"1px solid #E5E5EA !important" ,boxShadow:'0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex',justifyContent:'space-between', alignItems: 'center' }}>
          <img src={require('../assets/images/logimg.png')} alt="Logo" />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ 
                display: { xs: 'flex', md: 'none'},padding:'2px'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#1C1C1E',
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  margin: '0px 10px',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: 'red',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          

          <Box sx={{display:'flex',alignItems:'center'}}>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <IconButton>
            <MoonIcon sx={{color:'#1c1c1c', opacity:0.5}}/>
            </IconButton>
            <IconButton>
            <NotificationsNoneIcon sx={{color:'1c1c1c'}}/>
            </IconButton>
          </Box>
            <Tooltip title="Open settings" >
              
              <IconButton sx={{ p: 0, color: 'black' }}>
                <Avatar alt="Charles Carmichael" sx={{background:'#8C7548'}} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Typography
                sx={{ color:'#1c1c1c', ml:'10px',fontSize:'12px',fontWeight:500 ,display: { xs: 'none', lg: 'block' }}}
                >
                  Charles Carmichael
                  <Typography 
                
                sx={{display:'block !important',color:'#1c1c1c',fontSize:'12px',textAlign:'start',ml:'0px',fontWeight:500,opacity:0.5}}
                >
                  UX/UI Designer
                </Typography>
                </Typography>

          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
