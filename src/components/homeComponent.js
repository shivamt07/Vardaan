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
import MobMenu from "./mobileMenu";
import navButtons from "./navButtons";
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

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
    // display: "flex",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const navData = [
  { key: 1, offset: -73, to: "aboutMe", title: "About me" },
  { key: 2, offset: -57, to: "service", title: "My Services" },
  { key: 3, offset: -73, to: "querry", title: "Querry" },
  // { key: 4, offset: -57, to: "project", title: "My Projects" },
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "black" }}>
          <div className={classes.sectionDesktop}>
            <Grid container justify="center">
              <Grid item xs={2}>
                <img src={Logo} alt="logo" width="150" height="60" />
              </Grid>
              {navData.map((data) => {
                return (
                  <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item hover-high-effect" key={data.key}>
                    <Link to={data.to} smooth={true} duration={500} offset={data.offset} activeClass="active" isDynamic={true} className="top-bar-link">
                      <Button className="item-btn">
                        <strong className="top-bar-text" style={{color:"rgb(255 255 255)"}}>{data.title}</strong>
                      </Button>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className={classes.sectionMobile}>
            <Toolbar>

            <Grid container spacing={2}>
  <Grid item xs={10}>
  <img src={Logo} alt="logo" width="100" height="40" />
  </Grid>
  <Grid item xs={2}>
  <MenuIcon
         id="demo-customized-button"
         aria-controls="demo-customized-menu"
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         variant="contained"
         disableElevation
         onClick={handleClick}
         style={{marginTop: "13px"}}
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
           {navData.map((data) => {
                return (
                  <div >
                
                    <Link to={data.to} smooth={true} duration={500}  activeClass="active" isDynamic={true} className="top-bar-link">       
        <MenuItem onClick={handleClose} disableRipple>
          {/* <EditIcon /> */}
          {data.title}
        </MenuItem>
        </Link>
        <Link/>
                  </div>
                );
              })}
      </StyledMenu>
  </Grid>
</Grid>
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <AboutUs />
      <Know />
      <Querry />
      <Profile />
      <Footer />
    </React.Fragment>
  );
}
