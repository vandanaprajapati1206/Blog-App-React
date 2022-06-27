import React, { useState } from "react";
import "./admin.css";

const UsersList = ({ item }) => {
  
  const [search, setSearch] = useState("");

  return (
    <div style={{ borderColor: "darkseagreen" }}>
      <div>
        <span>Search by Email: </span>
        <input
          placeholder="Search Email"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span style={{ margin: "20px" }}>Search by Name: </span>
        <input
          placeholder="Search Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br /> <br />
      </div>
      <table style={{ margin: "auto" }}>
        <thead></thead>
        <tbody style={{ textAlign: "start" }}>
          {item
            .filter((user) => {
              if (search === "") {
                return item;
              } else if (
                user.email.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((i) => {
              const {
                user_id,
                email,
                gender,
                name,
                phone,
                role,
                desc,
              } = i;
              return (
                <article key={user_id} className="question">
                  <tr style={{ color: "ActiveBorder" }}>
                    Name :<th style={{ color: "Green" }}>{name}</th>
                  </tr>
                  <tr>
                    Phone : <th style={{ color: "Blue" }}>{phone}</th>
                  </tr>
                  <tr>
                    Email : <th style={{ color: "red" }}> {email} </th>
                  </tr>
                  <tr>
                    Description : <th> {desc} </th>
                  </tr>
                  <tr>
                    Gender : <th> {gender} </th>
                  </tr>
                  <tr>
                    Role : <th> {role} </th>
                  </tr>
                  {/* <tr>
                    Intersted : <th>{category}</th>
                  </tr> */}

                  {/*                    
                    <p style={{color: "green"}}>Category :{category.map(function(d,idx){
              return (<li key={idx}>{d.label}</li>)
            })}</p> */}
                </article>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;
