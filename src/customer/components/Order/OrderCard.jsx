import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = (order) => {

    const navigate = useNavigate();
    console.log(order)

    return (
        <div onClick={() => navigate(`/account/order/${order.order.id}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>

            {order.order.orderItems.map((orderitem) => (
                <Grid container spacing={2} sx={{ justifyContent: "space-between", marginBottom: "20px" }}>
                    <Grid item xs={6}>

                        <div className='flex cursor-pointer'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' 
                            src={orderitem.product.imageUrl} alt="" />
                            <div className='ml-5'>
                                <p className=''>{orderitem.product.title}</p>
                                <p className='opacity-50 text-xs font-semibold'>Size: {orderitem.size}</p>
                                <p className='opacity-50 text-xs font-semibold'>Quantity: {orderitem.quantity}</p>

                            </div>
                        </div>

                    </Grid>

                    <Grid item xs={2}>
                        <div>{orderitem.discountedPrice} VND</div>
                    </Grid>

                    <Grid item xs={4}>
                        {true && <div>
                            <p>
                                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2' />
                                <span>
                                    Delivered On March 03
                                </span>

                                <span></span>
                            </p>

                            <p className='text-xs'>
                                Your Item Has been Delivered
                            </p>
                        </div>}
                        {false && <p>
                            <span>
                                Expected Delivered On March 03
                            </span>
                        </p>}

                    </Grid>
                </Grid>

            ))}
            
        </div>
    )
}

export default OrderCard