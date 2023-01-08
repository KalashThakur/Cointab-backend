import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("./userDetails")
  }

  const handleFetch = () => {
  }

  const handleDelete = () => {
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
