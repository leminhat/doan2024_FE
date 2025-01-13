import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { findProductsById } from '../../../State/Product/Action';
import { submitReview } from '../../../State/Review/Action';
import { toast } from 'react-toastify';

const ProductReview = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams();
    const { products } = useSelector(store => store)
    console.log(products.product)
   


    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductsById(data))

    }, [params.productId])


    // Local state for review inputs
    const [rating, setRating] = useState(5);
    const [description, setDescription] = useState("");


    const totalReview = products.product?.reviews.length
    const averageRating  = products.product?.reviews.reduce((total, review) => total + review.rating, 0) / totalReview

   
    
    const handleReviewSubmit = () => {
        const review = {
            productId : params.productId,
            rating,
            review:description,
        };

        console.log(rating+"  "+description)
        dispatch(submitReview(review));
        toast.success('Review submitted successfully!')
        setDescription("");
        navigate("/")
    };

    return (
        <Box p={3}>
            <Typography variant="h4" mb={3}>
                Rate & Review Product
            </Typography>
            <Grid container spacing={3}>
                {/* Product Details */}
                <Grid item xs={12} md={6}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <Card>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <CardMedia item xs={6} md={4}
                                        component="img"
                                        height="100"

                                        image={products?.product?.imageUrl}
                                    //     alt={product.name}
                                    />
                                </Grid>

                                <Grid item xs={12} md={8}>
                                    <CardContent>
                                        <Typography variant="h4" style={{  lineHeight: '1.2', marginBottom: '8px' }}>{products.product?.title}</Typography>
                                        <Typography variant="h5" style={{  lineHeight: '0.8', marginBottom: '8px' }} color="textSecondary">
                                            {products.product?.brand}
                                        </Typography>
                                        <Typography variant="h5" color="primary" mt={2}>
                                            {products.product?.discountedPrice} VND
                                        </Typography>
                                        {/* <Typography variant="h5">Size: {products.product?.size}</Typography> */}
                                        <Typography variant="h5" mt={1}>Color: {products.product?.color}</Typography>
                                        <Box mt={2}>
                                        <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
                                            <Typography variant="h6">
                                                {totalReview} Ratings | {totalReview} Reviews
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" color="green" mt={2}>
                                            {/* Delivered On {product.deliveryDate} */}
                                        </Typography>

                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </Box>
                </Grid>

                {/* Review Form */}
                <Grid item xs={12} md={6}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <Typography variant="h6" mb={2}>
                            Rate This Product
                        </Typography>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                        />

                        {/* <Box mt={2}>
                            <TextField
                                label="Title"
                                variant="outlined"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Box> */}

                        <Box mt={2}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 3 }}
                            onClick={handleReviewSubmit}
                        >
                            Submit Review
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default ProductReview;
