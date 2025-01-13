import React from "react";
import { Avatar, Box, Grid2, Rating } from "@mui/material";

const ProductReviewCart = (review) => {
   
    const isoDate = review.review.createAt;
    const date = new Date(isoDate);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    
    console.log(review.review)
  return (
    <div className="bg-white p-4 rounded-lg shadow border-4 border-grey">
        <Grid2 container spacing={2} gap={3}>
            <Grid2 item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56,bgcolor:"#9155fd"}}>
                        {(review.review.user?.firstname)[0].toUpperCase()}
                    </Avatar>
                </Box>
            </Grid2>

            <Grid2 item xs={9}>
                <div className="space-y-1">
                    <div className=" flex items-center space-x-4">
                        <p className="font-semibold text-lg">{review.review.user?.firstname} {review.review.user?.lastname}</p>
                        <p className="text-base text-gray-500">     {formattedDate}</p>
                    </div>
                </div>

                <Rating value={review.review.rating} name='half-rating' readOnly precision={.5}/>
                <p>{review.review.review}</p>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default ProductReviewCart