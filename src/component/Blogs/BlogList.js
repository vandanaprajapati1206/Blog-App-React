import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";
import { options } from "../Options";

const BlogList = ({ item, remItem, updateItem }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <span>Search by Title: </span>
       <input
        placeholder="Search Title"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br/>
      <span>Search by Category: </span>
      <Select
       options={options}
       isMulti={true}
       _default={options.map(({ label }) => label)}
       onChange={setSearch}
       placeholder="Search Title"
     />

      
    {item.map((i) => {
      const { id, title,desc,listCategory} = i;
     
      return (
        <article key={id}>
        <p> Title:  {title}</p> 
         <p> Description : {desc}</p> 
           <p>Category :{listCategory}
           
              </p>
          <div>
          <Link to={`/edit-blog/${id}`}>
            <button
              type="button"
              onClick={() => {
                updateItem(id);
              }}
            >
              <FaEdit />
            </button>
            </Link>
            <button type="button" onClick={() => remItem(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      );
    })}
  </div>
//     <div>
//       <span>Search by Title: </span>
//       <input
//         placeholder="Search Title"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <br />
// {/* 
//       <article>
//         <table
//           style={{
//             backgroundColor: "#ffd2fd",
//             color: "darkblue",
//             padding: "30px",
//             marginTop: "30px",
//             marginInline: "auto",
//           }}
//         >
//           <thead style={{ backgroundColor: "navy", color: "white" }}>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Category</th>
              
//             </tr>
//           </thead>
          
//           {item
//             .filter((blog) => {
//               if (search === "") {
//                 return blog;
//               } else if (
//                 blog.title.toLowerCase().includes(search.toLowerCase())
//               ) {
//                 return blog;
//               }
//             })
//             .map((i) => {
//               const { id, title, desc, category } = i;
//               return (
//                 <tbody key={id}>
//                   <tr>
//                     <th>{title}</th>
//                     <th>{desc}</th>
//                     <th>{category}</th>
//                     <th>
//                       <Link to={`/user/edit-blog/${id}`}>
//                         <button
//                           type="button"
//                           onClick={() => {
//                             updateItem(id);
//                           }}
//                         >
//                           <FaEdit />
//                         </button>
//                       </Link>
//                     </th>
//                     <th>
//                       <button type="button" onClick={() => remItem(id)}>
//                         <FaTrash />
//                       </button>
//                     </th>
//                   </tr>
//                 </tbody> 
//               );
//             }
//             )
//             }
//         </table>
//       </article> */}
//     </div>
  );
};

export default BlogList;
