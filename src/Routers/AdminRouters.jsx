import React from 'react'
import { Route } from 'react-router-dom'
import Admin from '../Admin/components/Admin'

const AdminRouters = () => {
  return (
    <div>
        <Route>
            <Route path='/admin/*' element={<Admin/>}></Route>
        </Route>
    </div>
  )
}

export default AdminRouters