import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getLocalStorageSignUp from "../LogIn/getLocalStorageSignUp";

const UsersList = ({ item }) => {
  const [list, setList] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div style={{ borderColor: "darkseagreen" }}>
      <div>
        <span>Search by Email: </span>
        <input
          placeholder="Search "
          onChange={(e) => setSearch(e.target.value)}
        />
        <br /> <br />
      </div>
      <table border={2} style={{ margin: "auto" }}>
        <thead></thead>
        <tbody>
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
                category,
                name,
                phone,
                role,
                desc,
              } = i;
              return (
                <div style={{ textAlign: "start" }}>
                  <article key={user_id}>
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
                    {/* <p> Description : {desc}</p> */}
                    {/* <p>Gender : {gender}</p> */}
                    {/* <p>Role :{role.label}</p> */}
                    {/* <p style={{color: "green"}}>Category :{category.map(function(d,idx){
              return (<li key={idx}>{d.label}</li>)
            })}</p> */}
                  </article>
                </div>
              );
            })}
        </tbody>
      </table>
      {item
        .filter((user) => {
          if (search === "") {
            return item;
          } else if (user.email.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((i) => {
          const { user_id, email, gender, category, name, phone, role, desc } =
            i;
          return (
            <div style={{ color: "green", borderBlock: "black" }}>
              <article key={user_id}>
                {/* <p>Name : {name}</p> */}
                <p> Email: {email}</p>
                {/* <p> Description : {desc}</p> */}
                {/* <p>Gender : {gender}</p> */}
                <p>Phone No : {phone}</p>
                {/* <p>Role :{role.label}</p> */}
                {/* <p style={{color: "green"}}>Category :{category.map(function(d,idx){
              return (<li key={idx}>{d.label}</li>)
            })}</p> */}
              </article>
            </div>
          );
        })}
    </div>
  );
};
export default UsersList;
