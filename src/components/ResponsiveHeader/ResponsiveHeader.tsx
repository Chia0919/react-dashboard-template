import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Close,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  Repeat,
} from "@material-ui/icons";
import React, { Fragment } from "react";
const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    appBar: {
      background: "linear-gradient(to right, #0E5CAD, #1D0953)",
      [theme.breakpoints.up("sm")]: {
        // width: `calc(100% - ${drawerWidth}px)`,
        width: `100%`,
        marginLeft: drawerWidth,
      },
    },
    toolBar: {
      padding: "2px 12px",
      background: "linear-gradient(to right, #0E5CAD, #130CB7)",
      [theme.breakpoints.up("sm")]: {
        minHeight: "54px",
      },
      [theme.breakpoints.down("sm")]: {
        minHeight: "54px",
        background: "linear-gradient(to right, #0E5CAD, #130CB7)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 10,
      },
    },
    subToolbar: {
      background: "#ffffff",
      // width: '100%',
      minHeight: "35px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)",
    },
    backIcon: {
      background: "#592adc",
      color: "#ffffff",
      marginRight: "6px",
      borderRadius: "0",
      minHeight: "28px",
      width: "30px",
    },
    domainWrapper: {
      width: "100%",
      borderBottom: "1px solid #f7982f",
      display: "flex",
    },
    title: {
      fontSize: "9px",
      lineHeight: "10px",
      color: "white",
      poistion: "fixed",
    },
    selected: {
      fontSize: "14px",
      color: "#f7982f",
      lineHeight: "24px",
      fontWeight: 600,
    },
    breadCrumb: {
      fontSize: "8px",
      color: "#D2D1D6",
      lineHeight: "14px",
    },
    currentPath: {
      color: "white",
      lineHeight: "14px",
      paddingLeft: "4px",
      fontSize: "8px",
    },
  })
);

/**
 *
 * @param domainLabel : first label
 * @param selectedLabel : second label with orange color
 * @param breadcrumbsPath : path
 * @param currentPath : path label with white color
 * @param Mode : form and normal appbar
 * @param handleBack : history.push( back to pervious path)
 * @param formLabel: form sub label example > New Contract
 */
export const ResponsiveHeader = (props) => {
  const classes = useStyles({});
  const {
    breadcrumbsPath,
    currentPath,
    domainLabel,
    selectedLabel,
    Switch,
    handleBack,
    mode,
    formLabel,
    onClick,
    page,
  } = props;
  return (
    <Fragment>
      <Toolbar className={classes.toolBar}>
        <Typography
          component="div"
          noWrap
          style={{ color: "white", width: "100%", margin: "3px 0px" }}
        >
          <div className={classes.domainWrapper}>
            {" "}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              size="small"
              onClick={() => handleBack?.()}
            >
              {mode === "form" ? (
                <Close className={classes.backIcon} />
              ) : (
                <KeyboardArrowLeftIcon className={classes.backIcon} />
              )}
            </IconButton>
            <div
              style={{
                width: "100%",
              }}
            >
              <Typography variant="h6" className={classes.title}>
                {domainLabel || ""}
              </Typography>
              <div style={{ display: "flex" }} onClick={() => onClick?.()}>
                <Typography variant="h5" className={classes.selected}>
                  {selectedLabel}
                </Typography>
                {Switch && (
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <Repeat
                      style={{
                        color: "#f7982f",
                        width: "20px",
                        // textAlign: 'right',
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/** Breadcrumb path */}
          <div style={{ display: "flex" }}>
            {" "}
            <Typography variant="h6" className={classes.breadCrumb}>
              {breadcrumbsPath}
            </Typography>{" "}
            <Typography variant="h6" className={classes.currentPath}>
              {currentPath}
            </Typography>
          </div>
        </Typography>
      </Toolbar>
      {mode === "form" && (
        <Toolbar className={classes.subToolbar}>
          <Typography
            component="div"
            noWrap
            style={{ color: "white", width: "100%", display: "flex" }}
          >
            {/* <div style={{ maxWidth: '90%', width: '100%' }}> */}
            <Typography
              //   className={classes.title}
              variant="h6"
              color="textPrimary"
              style={{
                color: "black",
                fontWeight: 500,
                lineHeight: "36px",
                margin: "0 auto",
                maxWidth: "90%",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {formLabel}
            </Typography>
            {/* </div> */}
            <Button
              type="submit"
              color="inherit"
              form="submit-form"
              // className={classes.submitBtn}
              // disabled={disabled}
              style={{ flex: 1, textAlign: "right", color: "#f7982f" }}
            >
              {"Save"}
            </Button>
          </Typography>
        </Toolbar>
      )}
    </Fragment>
  );
};
