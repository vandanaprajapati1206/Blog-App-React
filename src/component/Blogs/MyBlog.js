import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Alert from "../Alert";
import { options } from "../Options";
import BlogList from "./BlogList";
import getLocalStorage from "./getLocalStorage";

export default function Blogs() {
  
  const [list, setList] = useState(getLocalStorage());
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("none");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const nav = useNavigate();

  function handleEditBlog(e) {
    e.preventDefault();
    console.log("handle Submit...!", name, desc, category);

    if (name && desc && category && isEdit) {
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
      nav("/myblog");
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
    setName(selectedItem.name);
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
    localStorage.setItem("BlogList", JSON.stringify(list)); 
  }, [list]);  
 
  // useEffect(() => {
  //   localStorage.setItem("AllBlogs", JSON.stringify(list));
  // }, [list]);

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
      )}

      <hr />
      <h2 style={{ color: "darkmagenta" }}>My Saved Blog List</h2>
      <hr />

      {list.length > 0 && (
        <div>
          <BlogList item={list} remItem={remItem} updateItem={updateItem} />
          <br />
          <button onClick={clearList}> Clear Blogs</button>
        </div>
      )}
    </section>
  );
}
