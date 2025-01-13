import { Grid } from '@mui/material'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

const AdminDashboard = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    axios.get('http://localhost:5555/api/sales/last7days')
      .then((response) => {
        const salesData = response.data;

        console.log(response)

        console.log(salesData)

        const labels = salesData.map(item => item[0]); // Lấy ngày từ dữ liệu
        const datas = salesData.map(item => item[1]);

        const data = {
          labels: labels,
          datasets: [
            {
              label: 'Revenue',
              data: datas,
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-500'),
              tension: 0.4
            },
            // {
            //     label: 'Second Dataset',
            //     data: [28, 48, 40, 19, 86, 27, 90],
            //     fill: false,
            //     borderColor: documentStyle.getPropertyValue('--pink-500'),
            //     tension: 0.4
            // }
          ]
        };
        const options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
          plugins: {
            legend: {
              labels: {
                color: textColor
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder
              }
            },
            y: {
              ticks: {
                color: textColorSecondary
              },
              grid: {
                color: surfaceBorder
              }
            }
          }
        };

        setChartData(data);
        setChartOptions(options);
      }).catch((error) => {
        console.error('Error fetching sales data:', error);
      })
  }, []);


  return (
    <div >
      <Grid container >
        <Grid item xs={12} md={4} className='border border-red-600'>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={8} className='border border-blue-800'>
          <MonthlyOverview />
        </Grid>
      </Grid>

      <div className='px-10 mb-4'>
        <div className='card m-10 pb-20 mb-5'>
          <Chart type="line" data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard