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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>
          <Route path="/user" element={<NavBar />}>
            <Route path="/user/blog-list" element={<Blogs />} />
            <Route path="/user/myblog" element={<MyBlog />} />
            <Route path="/user/edit-blog/:id" element={<EditBlog />} />
            <Route path="/user/add-blog" element={<AddBlog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
