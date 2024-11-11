import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Product/Action';


const ProductTable = () => {
  const dispatch =useDispatch();
  const {products} = useSelector(store=>store);

  console.log("products ----",products)

  useEffect(()=>{
    const data={
      category:null,
      color:[],
      sizes:[],
      minPrice:null,
      maxPrice:null,
      minDiscount:0,
      sort:'price_low',
      pagenumber:1,
      pageSize:10,
      stock:""
    }
    //dispatch(findProducts(data))
  },[])

  return (
    <div>
      <TableContainer >
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Quantity</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default ProductTable