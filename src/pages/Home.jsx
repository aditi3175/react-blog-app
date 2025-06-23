import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home({ blogs, setBlogs }) {
  function handleDelete(idToDelete) {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      setBlogs(blogs.filter(blog => blog.id !== idToDelete));
    }
  }
  return (
    <div className="blog-container">
      <h1 className="home-header">Welcome to the Blog App!!</h1>
      {blogs.length === 0 && (
        <div className="empty-state">
          <FaRegSadTear size={48} style={{ marginBottom: '1rem' }} />
          <p className="nothing">No Blogs here Yet!! Be the first to create one.</p>
        </div>
      )}

      {blogs.map((blog) => (
       <div key={blog.id} className="hero ">
         <h3>{blog.title}</h3>
         <p>{blog.content}</p>
          <small>Posted on: {blog.date}</small>
          <Link to={`/edit/${blog.id}`}>Edit</Link>
          <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
         <hr />
       </div>
      ))}
    </div>
  );
}

export default Home;

