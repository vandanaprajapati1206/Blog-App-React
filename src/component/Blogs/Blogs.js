import React, { useEffect, useState } from "react";
import Alert from "../Alert";
import BlogList from "./BlogList";
import getLocalStorage from "./getLocalStorage";

import { Link } from "react-router-dom";

export default function Blogs() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("none");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  // function handleAddBlog(e) {
  //   e.preventDefault();
  //   console.log("handle Submit...!", name, desc, category);
  //   if (!name && !desc && !category) {
  //     showAlert(
  //       true,
  //       "danger",
  //       " Title , Description, and Category Requierd..!"
  //     );
  //   } else if (!name && !desc) {
  //     showAlert(true, "danger", " Title and Description Requierd..!");
  //   } else if (!category && !desc) {
  //     showAlert(true, "danger", " Category and Description Requierd..!");
  //   } else if (!category && !name) {
  //     showAlert(true, "danger", " Title and Category Requierd..!");
  //   } else if (!name) {
  //     showAlert(true, "danger", " Title  Requierd..!");
  //   } else if (!desc) {
  //     showAlert(true, "danger", " Description Requierd..!");
  //   } else if (!category) {
  //     showAlert(true, "danger", " Category Requierd..!");
  //   } else if (name && desc && category && isEdit) {
  //     setList(
  //       list.map((i) => {
  //         if (i.id === editId) {
  //           return { ...i, title: name, desc: desc, category: category };
  //         }
  //         return i;
  //       })
  //     );
  //     setName("");
  //     setDesc("");
  //     setCategory("");
  //     setEditId(null);
  //     setIsEdit(false);
  //     showAlert(true, "success", "Update Item");
  //   } else {
  //     showAlert(true, "success", "Item Added To List");
  //     const newItem = {
  //       id: new Date().getTime().toString(),
  //       title: name,
  //       desc: desc,
  //       category: category,
  //     };
  //     setList([...list, newItem]);
  //     setName("");
  //     setCategory("");
  //     setDesc("");
  //   }
  // }

  const remItem = (id) => {
    showAlert(true, "danger", "remove item");
    setList(list.filter((i) => i.id !== id));
  };

  const updateItem = (id) => {
    const selectedItem = list.find((i) => i.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(selectedItem.title);
    setDesc(selectedItem.desc);
    setCategory(selectedItem.category);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      
      <div>
 {/* <form onSubmit={handleAddBlog}>
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
                <select
                  name="list"
                  value={category}
                  style={{ width: "150px" }}
                  id="list"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Professional">Professional</option>
                </select>
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
                {isEdit ? (
                  <button
                    type="submit"
                    style={{ color: "white", backgroundColor: "#8b008b" }}
                  >
                    Edit Blog
                  </button>
                ) : (
                  <button
                    type="submit"
                    style={{
                      color: "midnightblue",
                      backgroundColor: "#ffd2fd",
                    }}
                  >
                    Add Blog
                  </button>
                )}
              </th>
              <th></th>
            </tr>
          </tbody>
        </table>
      </form> */}  
      </div>
    
      {list.length > 0 && (
        <div>
          <hr />
          <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
    
          <hr />
          <BlogList item={list} remItem={remItem} updateItem={updateItem} />
        </div>
      )}
    </section>
  );
}
