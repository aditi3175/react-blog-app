import { useState } from "react";

function CreateBlog({blogs,setBlogs}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleContentChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBlog = { id: Date.now(),title, content, date: new Date().toLocaleString() };
    setBlogs([...blogs, newBlog]);
    setTitle("");
    setContent("");
  }

  return (
    <div className="create-form-container">
      <h1 className="head2">Create a Blog.</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="l1">Blog Title:  </label>
       <input className="input"
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter here." />
       <br/>
       <label className="l2">Blog Content:  </label>
       <textarea className="text"
        value={content}
        onChange={handleContentChange}
        placeholder="Enter your blog here." />
       <br/>
       <button className="btn1" type="submit">Submit</button>
      </form>
      <hr />
      <h2>All Blogs.</h2>
      {blogs.map((blog) => (
        <div key = {blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default CreateBlog;