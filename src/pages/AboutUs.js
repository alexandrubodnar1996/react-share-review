import "../css/Home.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function AboutUs() {
  const breadcrumbs = [<Link to="/">Home</Link>, <span>About Us</span>];
  return (
    <>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <div>About Us Page</div>
    </>
  );
}

export default AboutUs;
