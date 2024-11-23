import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrderTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={2} item mr={0.6} className='border border-black'>
            <Grid item xs={12} md={4}  className='border border-red-600'>
                <Achivement/>

            </Grid>
            <Grid item xs={12} md={7.6} className='border border-blue-800'>
              <MonthlyOverview/>

            </Grid>


            <Grid item xs={12} md={6} className='border border-green-800'>
              <ProductTableView/>

            </Grid>

            <Grid item xs={12} md={6} className='border border-yellow-600'>
              <OrderTableView/>

            </Grid>


        </Grid>
    </div>
  )
}

export default AdminDashboard