import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import Select from "react-select";
import { options } from "../Options";
import getLocalStorage from "../Storage/getLocalStorage";

const AdminAddBlog = () => {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [userListId, setUserListId] = useState("");
  const [category, setCategory] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const navigate = useNavigate();

  let AllBlogsArr = JSON.parse(localStorage.getItem("AllBlogs")) || [];
  console.log(AllBlogsArr);

  let userData = localStorage.getItem("usersSignup", "user_id");
  let userArr = JSON.parse(userData);

  var stateArray = userArr.map((item, i) => ({
    label: `${item.email}`,
    value: `${item.email}`,
  }));


  // var userID = userArr.map((item, i) => ({
  //   userID: `${item.id}`
  // }));
  // console.log(stateArray);

  //const userOptions = stateArray

  // console.log(id);

  // const obj = userArr.map((user_id, i) => {

  //   console.log(userArr[i].user_id)
  // });

  // console.log(obj);
  // let loginUserId = JSON.parse(localStorage.getItem("LoginUser"));
  // let add_Blog_userid = loginUserId.loginUser_id;
  // console.log(add_Blog_userid)

  function handleAddBlog(e) {
    e.preventDefault();
    console.log("handle Submit...!", name, desc, category, userListId);
    // let blogsArr = JSON.parse(localStorage.getItem("BlogList")) || [];
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
    } else if (!userListId) {
      showAlert(true, "danger", " Users Requierd..!");
    } else if (name && desc && category && isEdit) {
      setList(
        list.map((i) => {
          if (i.id === editId) {
            return {
              ...i,
              name,
              desc,
              category,
              userListId,
            };
          }
          return i;
        })
      );
      setName("");
      setDesc("");
      setCategory("");
      setUserListId("");
      setEditId(null);
      setIsEdit(false);
      showAlert(true, "success", "Update Item");
    } else {
      showAlert(true, "success", "Item Added To List");
      
      const AllBlogs = {
        id: new Date().getTime().toString(),
        name,
        desc,
        category,
        userListId,
        likes :[]
      };

      AllBlogsArr.push(AllBlogs);
      // localStorage.setItem("LikeBlog", JSON.stringify(AllBlogsArr));
      localStorage.setItem("AllBlogs", JSON.stringify(AllBlogsArr));
    
      setName("");
      setCategory("");
      setDesc("");
      setUserListId("");
      navigate("/admin/blogs");
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
                  name="description"
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
                <Select
                  isMulti={true}
                  options={stateArray}
                  _default={stateArray.map(({ label }) => label)}
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
