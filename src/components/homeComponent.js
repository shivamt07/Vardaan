import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import About from "./about";
import Know from "./knowmore";
import Querry from "./querry";
import Profile from "./founderProfile";
import Footer from "./footer";
import Logo from "../assets/logos.png";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import { Button, Grid } from "@mui/material";
import AboutUs from "./AboutUs";

const styles = {
  media: {
    height: 0,
    paddingTop: "47%", // 16:9
  },
};
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100%",
    },
  },
  sectionMobile: {
    display: "flex",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const navData = [
  { key: 1, offset: -73, to: "aboutMe", title: "About me" },
  { key: 2, offset: -57, to: "service", title: "My Services" },
  { key: 3, offset: -73, to: "skill", title: "My Skills" },
  { key: 4, offset: -57, to: "project", title: "My Projects" },
  { key: 5, offset: -73, to: "contact", title: "Contact me" },
];

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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "#CEE5D0" }}>
          <div className={classes.sectionDesktop}>
            <Grid container justify="center">
              <Grid item xs={2}>
                <img src={Logo} alt="Girl in a jacket" width="150" height="60" />
              </Grid>
              {navData.map((data) => {
                return (
                  <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item hover-high-effect" key={data.key}>
                    <Link to={data.to} smooth={true} duration={500} offset={data.offset} activeClass="active" isDynamic={true} className="top-bar-link">
                      <Button className="item-btn">
                        <strong className="top-bar-text">{data.title}</strong>
                      </Button>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <Toolbar>
              <Link to={"aboutMe"} smooth={true} duration={500} activeClass="active" isDynamic={true}>
                <Button>abhishek</Button>
              </Link>
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Container> */}
      <AboutUs />
      {/* <About style={{ marginTop: "50px" }} /> */}
      <Know />
      <Querry />
      <Profile />
      <Footer />
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
