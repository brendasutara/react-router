import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPage() {
  return (
    <>
      <Outlet />

      <h1>BlogPage</h1>

      <ul>
        {blogdata.map((post) => (
          <BlogLink key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  );
}

BlogLink.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BlogPage;
