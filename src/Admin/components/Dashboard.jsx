import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrderTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {
  return (
    <div className='p-10 '>
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
                <Achivement/>

            </Grid>
            <Grid item xs={12} md={7.5}>
              <MonthlyOverview/>

            </Grid>


            <Grid item xs={12}>
              <ProductTableView/>

            </Grid>

            <Grid item xs={12}>
              <OrderTableView/>

            </Grid>


        </Grid>
    </div>
  )
}

export default AdminDashboard