import * as React from 'react';
//external components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//css 
import './navBar.css'


const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar >
          <Toolbar>
           <div className='nav-home'>
                <Typography  >
                    Home
                </Typography>
           </div>
              <div className='nav-product'> 
                  <Typography  >Producto</Typography>
              </div>
                <div className='nav-login-boton'>
                  <button className='boton-nav'>
                    login
                  </button>
                </div>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;