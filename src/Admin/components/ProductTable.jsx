import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts, updateProduct } from "../../State/Product/Action";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const navigate = useNavigate();

  console.log("products ---- ", products);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }

  const handleProductUpdate=(productId)=>{
    navigate(`/admin/products/${productId}`)
  }

  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, [products.deletedProduct]);

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Update</TableCell>
               
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.products?.content?.sort((a, b) => b.id - a.id).map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>

                  <TableCell align="left" scope="row">
                    {item.title}
                  </TableCell>

                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left"> 
                    <Button onClick={()=>handleProductUpdate(item.id)} variant="outlined">Update</Button>
                    </TableCell>

                  <TableCell align="left">
                    <Button onClick={()=>handleProductDelete(item.id)} variant="outlined">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};


export default ProductTable;
