import React from "react";
import { Avatar, Box, Grid2, Rating } from "@mui/material";

const ProductReviewCart = (review) => {
    console.log(review.review)
  return (
    <div>
        <Grid2 container spacing={2} gap={3}>
            <Grid2 item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56,bgcolor:"#9155fd"}}>
                        {(review.review.user?.firstname)[0].toUpperCase()}
                    </Avatar>
                </Box>
            </Grid2>

            <Grid2 item xs={9}>
                <div className="space-y-2">
                    <div>
                        <p className="font-semibold text-lg">{review.review.user?.firstname} {review.review.user?.lastname}</p>
                        <p className="opacity-70">May 25, 2002</p>
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