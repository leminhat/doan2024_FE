import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TrignleImg=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrognleImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:'absolute'
})

const Achivement = () => {
  return (
    <div >
        <Card className='space-y-5' sx={{position:'relative', bgcolor:'#242B2E', color:'white'}}>
            <CardContent>
                <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                    Ecommerce System
                </Typography>

                <Typography variant='body2'>Congratulations</Typography>
                <Typography variant='h5' sx={{my:3.1}}>687.2k</Typography>
                <Button size='small' variant='contained'>View Sale</Button>

                <TrignleImg src=''></TrignleImg>
                <TrognleImg src='https://png.pngtree.com/png-clipart/20200224/original/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_5219704.jpg'/>
            </CardContent>
        </Card>
    </div>
  )
}

export default Achivement