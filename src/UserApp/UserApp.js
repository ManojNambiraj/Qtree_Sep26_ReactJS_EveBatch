import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './Pages/CreateUser'
import UserList from './Pages/UserList'
import UpdateUser from './Pages/UpdateUser'

function UserApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/edit' element={<UpdateUser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default UserApp

// Create   Read    Update    Delete
// POST     GET     PUT        DELETE