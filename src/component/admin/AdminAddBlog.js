import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Select from "react-select";
import { options } from "../Options";
import getLocalStorage from "../Blogs/getLocalStorage";

const AdminAddBlog = () => {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("none");
  const [loginId, setloginId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [userListId, setUserListId] = useState("")
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const navigate = useNavigate();

  let userData = localStorage.getItem("usersSignup", "user_id");
  let userArr = JSON.parse(userData);
//   let obj = userArr.find(o => o.user_id);
//  console.log(obj);

// let obj = userArr.find((o, i) => {
//   if (o.user_id === '') {
//     userArr[i] = { user_id: ''};
//       return true; 
//   }
// });

var stateArray = userArr.map(item => item.user_id);

var id =stateArray.toString()
console.log(stateArray);
console.log(id);

// const obj = userArr.map((user_id, i) => {
  
//   console.log(userArr[i].user_id)
// });

  // console.log(obj);
  // let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  // let add_Blog_userid = loginUserId.loginUser_id;
  // console.log(add_Blog_userid)
  
  function handleAddBlog(e) {
    e.preventDefault();
    console.log("handle Submit...!", name, desc, category);
    let blogsArr = JSON.parse(localStorage.getItem("BlogList")) || [];

    let AllBlogsArr = JSON.parse(localStorage.getItem("AllBlogs")) || [];

    if (!name && !desc && !category) {
      showAlert(
        true,
        "danger",
        " Title , Description, and Category Requierd..!"
      );
    } else if (!name && !desc) {
      showAlert(true, "danger", " Title and Description Requierd..!");
    } else if (!category && !desc) {
      showAlert(true, "danger", " Category and Description Requierd..!");
    } else if (!category && !name) {
      showAlert(true, "danger", " Title and Category Requierd..!");
    } else if (!name) {
      showAlert(true, "danger", " Title  Requierd..!");
    } else if (!desc) {
      showAlert(true, "danger", " Description Requierd..!");
    } else if (!category) {
      showAlert(true, "danger", " Category Requierd..!");
    } else if (name && desc && category && isEdit) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return {
              ...i,
               name,
               desc,
               category,
         
            };
          }
          return i;
        })
      );
      setName("");
      setDesc("");
      setCategory("");
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "success", "Update Item");
    } else {
      showAlert(true, "success", "Item Added To List");
      const newBlog = {
        id: new Date().getTime().toString(),
        name,
         desc,
         category,
   
      };

      blogsArr.push(newBlog);
      localStorage.setItem("BlogList", JSON.stringify(blogsArr));

      const AllBlogs = {
        id: new Date().getTime().toString(),
        name,
         desc,
         category,
        date: new Date().getDate().toString(),
      };

      AllBlogsArr.push(AllBlogs);
      localStorage.setItem("AllBlogs", JSON.stringify(AllBlogsArr));

      setName("");
      setCategory("");
      setDesc("");
      navigate("/myblog");
    }
  }
  //   useEffect(()=>{
  //     localStorage.setItem('BlogList', JSON.stringify(list))
  // },[list]);

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <section>
      <hr />
      <h2 style={{ color: "darkmagenta" }}>Add Blog</h2>
      <hr />

      <form onSubmit={handleAddBlog}>
        {alert.show && <Alert {...alert} remAlert={showAlert} />}

        <table
          style={{
            borderStyle: "double",
            color: "darkblue",
            marginInline: "auto",
          }}
        >
          <tbody>
            <tr>
              <th>
                <label>Blog Title </label>
              </th>
              <th>:</th>
              <th>
                <input
                  type="text"
                  placeholder="Enter Blog Title"
                  name="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>
                <label>Blog Description </label>
              </th>
              <th>:</th>
              <th>
                <textarea
                  placeholder="Blog Description"
                  description="name"
                  value={desc}
                  rows="5"
                  cols="17"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </th>
            </tr>

            <tr>
              <th>
                <label>Blog Category </label>
              </th>
              <th>:</th>
              <th>
                <Select
                  options={options}
                  isMulti={true}
                  _default={options.map(({ label }) => label)}
                  onChange={setCategory}
                />
              </th>
            </tr>

            <tr>
              <th>
                <label>Assign User </label>
              </th>
              <th>:</th>
              <th>
                <select
                  value={id}
                 
              
                  onChange={setUserListId}
                />
              </th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th></th>
            </tr>
            <tr>
              <th colSpan={3}>
                <button
                  type="submit"
                  style={{
                    color: "midnightblue",
                    backgroundColor: "#ffd2fd",
                  }}
                >
                  Add Blog
                </button>
              </th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
};
export default AdminAddBlog;
