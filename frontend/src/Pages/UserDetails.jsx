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
      let res = await fetch("http://localhost:8080/user");
      let data = await res.json();
      console.log('data:', data)
      setData([...data]);
    } catch (err) {
      console.log("err: ", err);
    }
  };
  // console.log("data:", data);

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.id} className={style.container}>
            <div>
              <img src={item.picture.large} alt="user profile" />
              <h2>{item.name.title} {item.name.first} {item.name.last}</h2>
              <p>{item.email}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserDetails
