import React from 'react'
import { Route, Router } from 'react-router-dom'
import Admin from '../Admin/components/Admin'
import PrivateRoute from './PrivateRoute';

const AdminRouters = () => {

  const roles = localStorage.getItem("roles")
  
  return (
    <div>
        <Route>
            <Route path='/admin/*' element={<Admin/>}></Route>
        </Route>
    </div>
  )

 
}

export default AdminRouters