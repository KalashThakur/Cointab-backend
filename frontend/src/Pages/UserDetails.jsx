import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import style from './UserDetails.module.css';

const UserDetails = () => {

  let [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      setData(data);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  console.log("data:", data);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id} className={style.container}>
            <div>
              {/* <img src={item.picture.large} alt="" /> */}
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserDetails
