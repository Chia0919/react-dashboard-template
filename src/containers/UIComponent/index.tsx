import React from "react";
import { ResponsiveHeader } from "components/ResponsiveHeader/ResponsiveHeader";
import { useHistory } from "react-router";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const UIComponent = () => {
  let history = useHistory();
  return (
    <>
      <ResponsiveHeader
        domainLabel="domain"
        selectedLabel="Component"
        breadcrumbsPath="Main / "
        currentPath="Component"
        handleBack={() => history.push("/")}
      />
      <div style={{ padding: "12px" }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => history.push("/component/form")}
        >
          <AddIcon />
        </Fab>
      </div>
    </>
  );
};
export default UIComponent;
