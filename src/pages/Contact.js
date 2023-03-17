import "../css/Home.css";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

function Contact() {
  const breadcrumbs = [<Link to="/">Home</Link>, <span>Contact</span>];
  return (
    <>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <div>Contact Page</div>
    </>
  );
}

export default Contact;
