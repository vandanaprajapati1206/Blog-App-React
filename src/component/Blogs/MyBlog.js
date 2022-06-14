// import React, { useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import BlogList from "./BlogList";
// import Blogs from "./Blogs";
// import getLocalStorage from "./getLocalStorage";
// import { FaEdit, FaTrash } from "react-icons/fa";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Alert from "../Alert";
import { options } from "../Options";
import BlogList from "./BlogList";
import getLocalStorage from "./getLocalStorage";

// export default function MyBlog({ item, remItem, updateItem }) {
//   const [search, setSearch] = useState("");
//   const [list, setList] = useState(getLocalStorage());

//   return (
//     <div>
//       {list.length > 0 && (
//         <div>
//           <hr />
//           <h2 style={{ color: "darkmagenta" }}>My Blog List</h2>
//           <hr />
//           <input
//             placeholder="Search Title"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <br />
//           <article>
//             <table
//               style={{
//                 backgroundColor: "#ffd2fd",
//                 color: "darkblue",
//                 padding: "30px",
//                 marginTop: "30px",
//                 marginInline: "auto",
//               }}
//             >
//               <thead style={{ backgroundColor: "navy", color: "white" }}>
//                 <tr>
//                   <th>Title</th>
//                   <th>Description</th>
//                   <th>category</th>
//                   <th colSpan="2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>

//                 {/* {item.map((i) => {
//                   const { id, title, desc, listCategory } = i;
//                   return (
//                     <article key={id}>
//                       <tr>

//                       <th> Title: {title}</th>
//                       <th> Description : {desc} </th>
//                       <th>Category :{listCategory} </th>
//                       <div>
//                         <Link to={`/edit-blog/${id}`}>
//                           <button
//                             type="button"
//                             onClick={() => {
//                               updateItem(id);
//                             }}
//                           >
//                             <FaEdit />
//                           </button>
//                         </Link>
//                         <button type="button" onClick={() => remItem(id)}>
//                           <FaTrash />
//                         </button>
//                       </div></tr>
//                     </article>
//                   );
//                 })} */}
//               </tbody>
//             </table>
//           </article>
//         </div>
//       )}
//     </div>
//   );
// }
export default function Blogs() {
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("none");
  const [isEdit, setIsEdit] = useState(true);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
 
  let user_id = JSON.parse(localStorage.getItem("usersSignup"));
  let user_blogs = user_id.find((obj) => {
    console.log(obj.user_id === user_id );
    return (obj.user_id === user_id );
  })

  function handleAddBlog(e) {
    e.preventDefault();

    console.log("handle Submit...!", name, desc, category);

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
            return { ...i, title: name, desc: desc, category: category };
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
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
        desc: desc,
        category: category,
        // user_id : user_id
      };
      setList([...list, newItem]);
      setName("");
      setCategory("");
      setDesc("");
   
    }
  }

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
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  useEffect(() => {
    localStorage.setItem("blog", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <h1 style={{ color: "darkmagenta" }}>Blog Application</h1>
    
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
      </form>
    
     <hr />
          <h2 style={{ color: "darkmagenta" }}>Blog List</h2>
          <hr />

      {list.length > 0 && (
        <div>
         
          <BlogList item={list} remItem={remItem} updateItem={updateItem} />

          {/* <button onClick={clearList}> Clear Blogs</button> */}
        </div>
      ) }
    </section>
  );
}
