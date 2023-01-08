import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("./userDetails")
  }

  const handleFetch = () => {
    axios.post("http://localhost:8080/user")
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e))
  }

  const handleDelete = () => {
    axios.delete("http://localhost:8080/user/delete")
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e))
  }

  return (
    <div>
      <button onClick={handleFetch}>Fetch Users</button>
      <button onClick={handleDelete}>Delete Users</button>
      <button onClick={handleClick}>User Details</button>
    </div>
  )
}

export default HomePage
