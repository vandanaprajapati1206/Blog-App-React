import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddBlog from "./component/Blogs/AddBlog";
import Blogs from "./component/Blogs/Blogs";
import EditBlog from "./component/Blogs/EditBlog";
import Contact from "./component/ContactUs/Contact";
import Header from "./component/Header/Header";
import Login from "./component/LogIn/Login";
import Signup from "./component/LogIn/Signup";
import NotFound from "./component/NotFoundPage/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup/>}/>     
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Routes>
          {/* <Route path="/" element={<Blogs />} /> */}
          <Route path="/blog-list" element={<Blogs />} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
