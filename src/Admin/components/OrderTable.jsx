import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
  cancelOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();

  const { adminOrder } = useSelector((store) => store);
  console.log(adminOrder.orders)

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder,adminOrder.canceled]);

  const handleShipOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  };

  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  };

  const handleDileverOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  }; 

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose();
  };

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
    handleClose();
  };

  return (
    <div className="p-5">
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders && Array.isArray(adminOrder.orders) && adminOrder.orders?.sort((a, b) => b.id - a.id).map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell align="left" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>

                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.toltalDiscountedPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full
                    ${item.orderStatus === "CONFIRMED"
                          ? "bg-[#2aac2a]"
                          : item.orderStatus === "SHIPPED"
                            ? "bg-[#2222a8]"
                            : item.orderStatus === "PLACED"
                              ? "bg-[#1d6e88]"
                              : item.orderStatus === "PENDING"
                                ? "bg-[gray]"
                                : item.orderStatus === "CANCEL"
                                  ? "bg-[red]"
                                  : "bg-[#148a3e]"
                        }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-{item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirmed Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipOrder(item.id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDileverOrder(item.id)}>
                        Delivered Order
                      </MenuItem>
                      <MenuItem onClick={() => handleCancelOrder(item.id)}>
                        Cancel Order
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item.id)}
                      variant="outlined"
                      disabled={item.orderStatus !== "CANCELLED"}
                    >
                      Delete
                    </Button>
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

export default OrderTable;
