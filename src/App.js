import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBlog from "./component/Blogs/AddBlog";
import Blogs from "./component/Blogs/Blogs";
import EditBlog from "./component/Blogs/EditBlog";
import Home from "./component/Pages/Home";
import MyBlog from "./component/Blogs/MyBlog";
import Contact from "./component/Pages/Contact";
import Header from "./component/Layout/Header";
import NavBar from "./component/Layout/NavBar";
import Login from "./component/LogIn/Login";
import Signup from "./component/LogIn/Signup";
import NotFound from "./component/Pages/NotFound";

// const Blogs = React.lazy(() => import( "./component/Blogs/Blogs"));

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    localStorage.setItem("login", user);
  }, [user]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
          {!user && (
            <Route path="/login" element={<Login auth={() => setUser(true)} />} />
          )}
          {!user && (
            <Route
              path="/sign-up"
              element={<Signup auth={() => setUser(true)} />}
            />
          )}
          <Route path="/contact-us" element={<Contact />} />
        </Route>
        {/* {user && (
          <Route path="/blogs" element={<NavBar logout={() => setUser(false)} />}>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/myblog" element={<MyBlog />} />
            <Route path="/edit-blog/:id" element={<EditBlog />} />
            <Route path="/add-blog" element={<AddBlog />} />
          </Route>
        )} */}

        <Route path="/" element={<NavBar  />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="myblog" element={<MyBlog />} />
          <Route path="edit-blog/:id" element={<EditBlog />} />
          <Route path="add-blog" element={<AddBlog />} />
        </Route>

        <Route path="*" element={<Navigate to={user ? "/user" : "/"} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
