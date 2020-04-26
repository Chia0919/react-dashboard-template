import React from "react";
import { ResponsiveHeader } from "components/ResponsiveHeader/ResponsiveHeader";
import { useHistory } from "react-router";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const Form = () => {
  let history = useHistory();
  return (
    <>
      <ResponsiveHeader
        domainLabel="domain"
        selectedLabel="Component"
        breadcrumbsPath="Main / Component"
        currentPath=" New Form "
        handleBack={() => history.push("/component")}
        formLabel="New Form"
        mode="form"
      />
      {/* <div style={{ padding: "12px" }}></div> */}
    </>
  );
};
export default Form;
