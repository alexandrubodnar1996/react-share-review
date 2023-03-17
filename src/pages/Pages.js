import "../css/Home.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function Pages() {
  const breadcrumbs = [<Link to="/">Home</Link>, <span>Pages</span>];
  return (
    <>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <div>Pages Page</div>
    </>
  );
}

export default Pages;
