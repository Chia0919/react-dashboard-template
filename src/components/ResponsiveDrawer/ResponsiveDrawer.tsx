import { Avatar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Apps, Home } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
// import contract365Logo from "assets/images/contractX-white.png";
import chia_logo from "assets/images/chia-.jpg";
import sidebg from "assets/images/sidebg.jpg";
import React from "react";
import { useHistory, useLocation, withRouter } from "react-router-dom";

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    appBar: {
      background: "linear-gradient(to right, #0E5CAD, #130CB7)",
      [theme.breakpoints.up("sm")]: {
        // width: `calc(100% - ${drawerWidth}px)`,
        width: `100%`,
        marginLeft: drawerWidth,
      },
    },
    toolBar: {
      [theme.breakpoints.up("sm")]: {
        minHeight: "54px",
      },
    },
    menuButton: {
      //   marginRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   display: 'none',
      // },
    },
    // necessary for content to be below app bar
    userProfileWrapper: {
      minHeight: "160px",
      backgroundImage: "url(" + sidebg + ")",
      backgroundSize: "20rem",
      backgroundRepeat: "no-repeat",
    },
    profileImage: {
      width: "80px",
      marginLeft: "15px",
      padding: "20px 0 10px",
      borderRadius: "100%",
    },
    avatar: {
      width: "100%",
      borderRadius: "100%",
      height: "80px",
      objectFit: "cover",
    },
    profileText: {
      marginLeft: "15px",
      padding: " 5px 0",
      position: "relative",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    profileLabel: {
      width: "100%",
      padding: "2px 30px",
      background: "rgba(0,0,0,.5)",
      display: "block",
      whiteSpace: "nowrap",
      color: "white",
    },
    drawerPaper: {
      width: drawerWidth,
      // maxWidth: '320px',
      marginTop: "54px",
    },
    content: {
      flexGrow: 1,
      marginBottom: "4px",
      //   padding: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        padding: "12px 12px 0",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
    hiddenHeader: {
      minHeight: "58px",
    },
    listItem: {
      cursor: "pointer",
      paddingTop: "6px",
      paddingBottom: "6px",
      color: "#212121",
      "& .MuiListItemIcon-root": {
        color: "#212121",
      },
      "&:hover": {
        backgroundColor: "#ffffff",
        borderLeft: "4px solid #130CB7",
        color: "#130CB7",
        "& .ListItemIcon": {
          color: "#130CB7",
          marginLeft: "-4px",
        },
      },
    },
    logoutTitle: {
      fontWeight: 500,
      fontSize: "1.1rem",
      padding: "1rem  1rem 0.6rem 1rem",
    },
    dialogBtns: {
      textTransform: "none",
      fontSize: "1rem",
    },
  })
);

interface ResponsiveDrawerProps {
  container?: any;
  children: any;
}

function ResponsiveDrawer(props: ResponsiveDrawerProps) {
  const { container, children } = props;
  const classes = useStyles({});
  let location = useLocation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let history = useHistory();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const adminMenu = [
    {
      label: "Dasboard",
      icon: <Home />,
      handleClick: () => {
        history.push("/dashboard");
        handleDrawerClose();
      },
    },
    {
      label: "Component",
      icon: <Apps />,
      handleClick: () => {
        history.push("/component");
        handleDrawerClose();
      },
    },
  ];
  const drawer = (
    <div>
      <div className={classes.userProfileWrapper}>
        <div className={classes.profileImage}>
          <Avatar
            alt="avatar"
            className={classes.avatar}
            src={chia_logo}
            onClick={() => history.push(`/account`)}
          />
        </div>
        <div className={classes.profileText}>
          {/* <UserAccExpansion
            title={firstName}
            subTitle={email}
            onClickLogOut={handleClickOpen}
            logOut={"Log Out"}
          /> */}
        </div>
      </div>
      <Divider />
      <List disablePadding>
        {adminMenu.map((item, index) => {
          return (
            <ListItem
              key={index}
              button
              onClick={item.handleClick}
              divider={true}
              className={classes.listItem}
            >
              <ListItemIcon className="ListItemIcon">{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        {location.pathname === "/dashboard" ||
        location.pathname === "/" ||
        location.pathname === "/home" ? (
          <Toolbar className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="div" noWrap>
              {/**Project LOGO */}
              {/* <img
                alt="user"
                //   src={chia_logo}
                width={130}
              /> */}
              <Avatar
                alt=""
                // className={classes.avatar}
                src={chia_logo}
                // onClick={() => history.push(`/account`)}
              />
            </Typography>
          </Toolbar>
        ) : (
          <Hidden smDown implementation="css">
            <Toolbar className={classes.toolBar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="div" noWrap>
                {/**Project LOGO */}
                <Avatar
                  alt=""
                  // className={classes.avatar}
                  src={chia_logo}
                  // onClick={() => history.push(`/account`)}
                />
                {/* <img src={chia_logo} width={130} /> */}
              </Typography>
            </Toolbar>
          </Hidden>
        )}
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smDown implementation="css">
          <Drawer
            container={container}
            variant={mobileOpen ? "temporary" : "persistent"}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden implementation="css">
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
        <div className={classes.hiddenHeader} />
        {children}
      </main>
    </div>
  );
}
export default withRouter(ResponsiveDrawer as any);
