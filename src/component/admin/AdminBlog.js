import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";
import getAllBlogsLocalStorage from "../Blogs/getAllBlogsLocalStorage";
import { options } from "../Options";
import AllBlog from "./AllBlog";

export default function AdminBlog() {
  const [blogData, setList] = useState(getAllBlogsLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("none");
  const [userListId, setUserListId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const nav = useNavigate();

  // useEffect(() => {
  //   localStorage.getItem("AllBlogs", JSON.stringify(blogData));
  // }, [blogData]);

  let userData = localStorage.getItem("usersSignup", "user_id");
  let userArr = JSON.parse(userData);
  var stateArray = userArr.map((item, i) => ({
    label: `${item.email}`,
    value: `${item.email}`,
  }));
  
  function handleEditBlog(e) {
    e.preventDefault();
    console.log("handle Submit...!", name, desc, category, userListId);

    if (name && desc && category && isEdit) {
      setList(
        blogData.map((i) => {
          if (i.id === editId) {
            return { ...i, title: name,desc: desc, category :category , userListId: userListId};
          }
          return i;
        })
      );
      setName("");
      setDesc("");
      setCategory("");
      setUserListId("")
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "success", "Update Item");
      nav("/admin/blogs");
    }
  }

  const remItem = (id) => {
    showAlert(true, "danger", "remove item");
    setList(blogData.filter((i) => i.id !== id));
  };
  const updateItem = (id) => {
    const selectedItem = blogData.find((i) => i.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(selectedItem.name);
    setDesc(selectedItem.desc);
    setCategory(selectedItem.category);
    setUserListId(selectedItem.userListId)
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
 
 
  useEffect(() => {
    localStorage.setItem("AllBlogs", JSON.stringify(blogData)); 
  }, [blogData]);  
 
  return (
       <section>
         {isEdit && (
        <form onSubmit={handleEditBlog}>
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
                    value={options.find(obj=>obj.value === category)}
                    // _default={options.map(({ label }) => label)}
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
                <Select
                  isMulti={true}
                  options={stateArray}
                  value={stateArray.find(obj=>obj.value === userListId)}
                  // _default={stateArray.map(({ label }) => label)}
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
                      style={{ color: "white", backgroundColor: "#8b008b" }}
                    >
                      Edit Blog
                    </button>
                  
                </th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </form>
      )}

      <hr />
      <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
      <hr />
            
        {blogData.length > 0 && (
        <div>
         <AllBlog item={blogData} remItem={remItem} updateItem={updateItem} />
        </div>
      )}    
      </section>

  );
}
