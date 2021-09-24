import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import About from './about';
import Know from './knowmore';
import Querry from './querry';
import Profile from './founderProfile';
import Footer from './footer';
import Logo from "../assets/logos.png"
import CardMedia from '@mui/material/CardMedia';

const styles = {
  media: {
     height: 0,
     paddingTop: '47%' // 16:9
  }
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:"#CEE5D0"}}>
        
      
          <Toolbar>
          <img src={Logo} alt="Girl in a jacket" width="150" height="60"/>
            {/* <Typography variant="h6" component="div">
              Scroll to Hide App Bar
            </Typography> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container> */}
          <About style={{marginTop: "50px"}}/>
          <Know/>
          <Querry/>
          <Profile/>
          <Footer/>
      {/* <Paper style={{backgroundColor:"black"}} elevation={3} />
        <Box sx={{ my: 2 }}>
        <Paper style={{backgroundColor:"black"}} elevation={3} />
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box> */}
      {/* </Container> */}
    </React.Fragment>
  );
}
