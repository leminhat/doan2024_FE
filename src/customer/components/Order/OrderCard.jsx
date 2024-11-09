import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>

                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
                    <div className='ml-5'>
                        <p className=''>ahihi</p>
                        <p className='opacity-50 text-xs font-semibold'>size: k</p>
                        <p className='opacity-50 text-xs font-semibold'>color: black</p>

                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <div>1000$</div>

            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}}  className='text-green-600 mr-2'/>
                    <span>
                        Delivered On March 03
                    </span>

                    <span></span>
                </p>

                <p className='text-xs'>
                    Your Item Has been Delivered
                </p>
                </div> }
                {false && <p>
                    <span>
                    Expected Delivered On March 03
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard