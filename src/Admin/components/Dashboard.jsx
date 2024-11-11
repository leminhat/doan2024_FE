import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import ProductTable from './ProductTable'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
                <Achivement/>

            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview/>

            </Grid>

            <Grid item xs={12} md={6}>
              <ProductTable/>

            </Grid>
        </Grid>
    </div>
  )
}

export default AdminDashboard