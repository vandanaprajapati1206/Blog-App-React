import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBlog from "./component/Blogs/AddBlog";
import Blogs from "./component/Blogs/Blogs";
import EditBlog from "./component/Blogs/EditBlog";
import MyBlog from "./component/Blogs/MyBlog";
import Contact from "./component/ContactUs/Contact";
import Header from "./component/Header/Header";
import NavBar from "./component/Header/NavBar";
import Login from "./component/LogIn/Login";
import Signup from "./component/LogIn/Signup";
import NotFound from "./component/NotFoundPage/NotFound";

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
          {!user && (
            <Route index element={<Login auth={() => setUser(true)} />} />
          )}
          {!user && (
            <Route
              path="/sign-up"
              element={<Signup auth={() => setUser(true)} />}
            />
          )}
          <Route path="/contact-us" element={<Contact />} />
        </Route>

        {user && (
          <Route
            path="/user"
            element={<NavBar logout={() => setUser(false)} />}
          >
            <Suspense fallback={<h1> Welcome...!</h1>}>
              <Route path="blog-list" element={<Blogs />} />    
              </Suspense>
              <Route path="myblog" element={<MyBlog />} />
              <Route path="edit-blog/:id" element={<EditBlog />} />
              <Route path="add-blog" element={<AddBlog />} />
        
          </Route>
        )}

        <Route path="*" element={<Navigate to={user ? "/user" : "/"} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
