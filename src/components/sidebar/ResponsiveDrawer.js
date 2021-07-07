import React,{useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {MdRateReview,MdBusinessCenter,MdAssignment,MdPowerSettingsNew} from 'react-icons/md';
import {Link} from "react-router-dom"
import {FiGrid} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {RiFileCopy2Line} from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import NotificationsIcon from '@material-ui/icons/Notifications';

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './responsiveDrawer.scss';
import Card from '../Card/Card';
import Cardtwo from '../Card/Cardtwo';
import {ListItem,ListItemText,ListItemIcon,Collapse} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixing.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [job,setjob]= useState(false)
  const [task,settask] = useState(false)
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <List>
      <ListItem button className="sidebar_icons">
            <ListItemIcon>
            <img src="https://dummyimage.com/34x34/000/fff" className="rounded_img" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ss text-light"
                primary="Cubecode Gaming"
              />{" "}
            </Link>
          </ListItem>
          <Divider />
          <ListItem button className="sidebar_icons">
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Dashboard"
              />{" "}
            </Link>
          </ListItem>
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiUsers className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="My Team"
              />{" "}
            </Link>
          </ListItem>
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <RiFileCopy2Line className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Activity Logs"
              />{" "}
            </Link>
          </ListItem>
          <Divider />
          <ListItem  button onClick={()=>settask(!task)} className="sidebar_icons">
           <ListItemIcon>
        {/* <HomeIcon/> */}
       
      </ListItemIcon>
       <ListItemText  primary="Education"  className="jobs_clr"/>
        <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
    </ListItem >

    <Collapse in={task}>
           <ListItem button className={classes.nesteditem}>
       <Typography color="secondary" fontWeight="fontWeightMedium">  <ListItemText  primary="Manage  Projects"/> </Typography> 
       </ListItem >
       {/* <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="Manage  Bids"/>
       </ListItem > */}
       <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="My Active Bids"/>
       </ListItem >
       <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="Post a Projects"/>
       </ListItem >
       </Collapse>
          <Divider />
          <ListItem  button onClick={()=>setjob(!job)} className="sidebar_icons">
           <ListItemIcon>
        {/* <HomeIcon/> */}
        
      </ListItemIcon>
       <ListItemText  primary="All Apps"  className="jobs_clr"/>
        <ListItemIcon>
             <ArrowDropDownIcon/>
      </ListItemIcon>
    </ListItem >

    <Collapse in={job}>
           <ListItem button className={classes.nesteditem}>
       <Typography color="secondary" fontWeight="fontWeightMedium">  <ListItemText  primary="Manage  Projects"/> </Typography> 
       </ListItem >
       {/* <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="Manage  Bids"/>
       </ListItem > */}
       <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="My Active Bids"/>
       </ListItem >
       <ListItem button className={classes.nesteditem}>
       <ListItemText  primary="Post a Projects"/>
       </ListItem >
       </Collapse>
    <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Project Overview"
              />{" "}
            </Link>
          </ListItem>
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Analytics"
              />{" "}
            </Link>
          </ListItem>
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Services"
              />{" "}
            </Link>
          </ListItem>
          
          <Divider />
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="How to Develop?"
              />{" "}
            </Link>
          </ListItem>
          <ListItem button className="sidebar_icons" >
            <ListItemIcon>
              <FiGrid className="font_job_si" />
            </ListItemIcon>
            <Link to="/userdashboard">
              {" "}
              <ListItemText
                className="ttle_clr_ssbr"
                primary="Downloads"
              />{" "}
            </Link>
          </ListItem>
  
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap className="d-flex">
            <h4 className="swatada">Developers</h4>
            
          </Typography>
       
        </Toolbar>
        
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
         <Card />
         <Cardtwo />
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
