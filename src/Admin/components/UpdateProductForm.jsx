import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, findProductsById, updateProduct } from "../../State/Product/Action";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const initialSizes = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },
];

const UpdateProductForm = () => {

    const params = useParams();
    const { product } = useSelector(store => store.products)
    const { products } = useSelector(store => store)
   
    console.log(product)



    useEffect(() => {
        const data = { productId: params.productId }

        dispatch(findProductsById(data))

    }, [params.productId,products.updatedProduct])


    const [productData, setProductData] = useState({
        id: params.productId,
        imageUrl: product?.imageUrl,
        brand: product?.brand,
        title: product?.title,
        color: product?.color,
        discountedPrice: product?.discountedPrice,
        price: product?.price,
        discountPercent: product?.discountPercent,
        size: product?.sizes,
        quantity: product?.quantity,
        topLevelCategory: product?.category.parentCategory.parentCategory.name,
        secondLevelCategory: product?.category.parentCategory.name,
        thirdLevelCategory:  product?.category.name,
        description: product?.description,
    });


    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSizeChange = (e, index) => {
        let { name, value } = e.target;
        name === "size_quantity" ? (name = "quantity") : (name = e.target.name);
        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData((prevState) => ({
            ...prevState,
            size: sizes,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(productData));
        console.log(productData);
    };

    return (
        <div className="createProductContainer p-10">
            <Typography
                variant="h3"
                sx={{ textAlign: "center" }}
                className="text-center"
            >
                Update Product
            </Typography>

            <form
                onSubmit={handleSubmit}
                className="createProductContainer p-10"
            >
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="id"
                            name="id"
                            value={productData.id}
                            onChange={handleChange}
                            disabled
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="imageUrl"
                            value={productData.imageUrl}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Brand"
                            name="brand"
                            value={productData.brand}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Color"
                            name="color"
                            value={productData.color}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            value={productData.quantity}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discounted Price"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discount Percentage"
                            name="discountPercent"
                            value={productData.discountPercent}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select
                                name="topLevelCategory"
                                value={productData.topLevelCategory}
                                onChange={handleChange}
                                label="Top Level Category"
                            >
                                <MenuItem value="men">Men</MenuItem>
                                <MenuItem value="women">Women</MenuItem>
                                <MenuItem value="kids">Kids</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select
                                name="secondLevelCategory"
                                value={productData.secondLevelCategory}
                                onChange={handleChange}
                                label="Second Level Category"
                            >
                                <MenuItem value="clothing">Clothing</MenuItem>
                                <MenuItem value="accessories">Accessories</MenuItem>
                                <MenuItem value="brands">Brands</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select
                                name="thirdLevelCategory"
                                value={productData.thirdLevelCategory}
                                onChange={handleChange}
                                label="Third Level Category"
                            >
                                <MenuItem value="top">Tops</MenuItem>
                                <MenuItem value="jeans">Jeans</MenuItem>
                                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                                <MenuItem value="saree">Saree</MenuItem>
                                <MenuItem value="lengha_choli">Lengha Choli</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={3}
                            onChange={handleChange}
                            value={productData.description}
                        />
                    </Grid>

                    {productData?.size?.map((size, index) => (
                        <Grid container item spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Size Name"
                                    name="name"
                                    value={size.name}
                                    onChange={(event) => handleSizeChange(event, index)}
                                    required
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // label="Quantity"
                                    name="size_quantity"
                                    type="number"
                                    value={size.quantity}
                                    onChange={(event) => handleSizeChange(event, index)}
                                    required
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ p: 1.8 }}
                            className="py-20"
                            size="large"
                            type="submit"
                        >
                            Update Product
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default UpdateProductForm;
