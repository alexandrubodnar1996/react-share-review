import "../css/Home.css";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

function Blog() {
  const breadcrumbs = [<Link to="/">Home</Link>, <span>Blog</span>];
  return (
    <>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <div>Blog Posts</div>
    </>
  );
}

export default Blog;
