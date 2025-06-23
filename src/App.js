import './App.css';
import { useState, useEffect } from "react";
import CreateBlog from "./components/CreateBlog";
import Home from "./pages/Home";
import EditBlog from "./components/EditBlog";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeToggle from "./context/ThemeToggle";

function App() {

  const [blogs, setBlogs] = useState(() => {
    const storedBlogs = localStorage.getItem("blogs");
    return storedBlogs ? JSON.parse(storedBlogs) : [];
  });  
  
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  
  return (
    <ThemeProvider>
      <div className="app-container">
        <BrowserRouter>
          <h1 className='head'>Blog App</h1>
          <nav className='slide'>
            <Link to="/">Home</Link> | <Link to="/create">Create Blog</Link>
            <ThemeToggle />
          </nav>
          <Routes>
            <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} />
            <Route path="/create" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
            <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;