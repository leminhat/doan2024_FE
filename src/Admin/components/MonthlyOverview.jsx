import { TrendingUp } from '@mui/icons-material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  { Grid,Avatar, Box, Card, CardHeader, IconButton, Typography, CardContent } from '@mui/material';

const MonthlyOverview = () => {

    const salesData=[
        {
            stats:'245K',
            title:'Sales',
            colors:'#F3B431',
            icon:<TrendingUp sx={{fontSize:'1.75rem'}}/>
        },

        {
            stats:'12.5K',
            title:'Customers',
            colors:'#45CE30',
            icon:<AccountCircleIcon sx={{fontSize:'1.75rem'}}/>
        },

        {
            stats:'1.45K',
            title:'Products',
            colors:'#E71C23',
            icon:<SettingsCellIcon sx={{fontSize:'1.75rem'}}/>
        },

        {
            stats:'88K',
            title:'Revenue',
            colors:'#0A79DF',
            icon:<AttachMoneyIcon sx={{fontSize:'1.75rem'}}/>
        }
    ]

    const renderStats=()=>{
        return salesData.map((item,index)=>(
            <Grid item xs={12} sm={3} key={index}>
                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                }}>
                    <Avatar variant='rounded' sx={{
                        mr:3,
                        width:44,
                        height:44,
                        boxShadow:3,
                        color:'common.white',
                        background:`${item.colors}`
                    }}>

                        {item.icon}
                    </Avatar>

                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant='caption'>{item.title}</Typography>
                        <Typography variant='h6'>{item.stats}</Typography>

                    </Box>

                </Box>

            </Grid>
        ))
    }
  return (
    <Card sx={{bgcolor:'#242B2E', color:'white'}}>
        <CardHeader title='Monthly Overview'
        action={
            <IconButton size='small' >
                <MoreVertIcon/>
            </IconButton>
        }

        subheader={
            <Typography variant='body2'>
                <Box component='span' sx={{fontWeight:600}}>
                    Total 48.5% groth 

                </Box>
                😎 this month

            </Typography>
        }

        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing:'.15px !important'

            }
        }}
        />

        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderStats()}

            </Grid>

        </CardContent>

       
    </Card>
  )
}

export default MonthlyOverview