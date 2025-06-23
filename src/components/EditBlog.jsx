import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";

function EditBlog({ blogs, setBlogs }) {
  
  const { id } = useParams(); 
  const navigate = useNavigate();
  const blogToEdit = blogs.find((blog) => blog.id === Number(id));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blogToEdit) {
     setTitle(blogToEdit.title);
     setContent(blogToEdit.content);
    }
  }, [blogToEdit]);
  
  if (!blogToEdit) {
    return <p>Blog not found</p>;
  }
  
  function handleUpdate(e) {
    e.preventDefault();

    const updatedBlog = { ...blogToEdit, title, content };
    const updatedBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );  
    setBlogs(updatedBlogs);
    navigate("/"); 
  }

  return (
    <div className="edit-form-container">
      <h2 className="head2">Edit Blog Page</h2>
      <form className="form-container" onSubmit={handleUpdate}>
        <label className="l1">Blog Title:  </label>
      <input className="input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter here." />
      <br/>
      <label className="l2">Blog Content:  </label>
      <textarea className="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your blog here." />
      <br/>
      <button className="btn1" type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditBlog;
