import React from 'react'
import {Routes, Route} from "react-router-dom";
import HomePage from './HomePage';
import UserDetails from './UserDetails';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/userDetails' element={<UserDetails />} />
    </Routes>
  )
}

export default AllRoutes
