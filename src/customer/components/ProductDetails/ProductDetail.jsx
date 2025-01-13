"use client";
import HomeSelectionCard from "../HomeSelectionCard/HomeSelectionCard";
import ProductReviewCart from "./ProductReviewCart";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { mens_kurta } from "../../../Data/mens_kurta";
import { handler } from "@tailwindcss/aspect-ratio";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";


const product = {
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ]
};


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {

  const [selectedSize, setSelectedSize] = useState();



  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(store => store)


  if (products?.product?.category) {

    product.breadcrumbs[0].name = products.product.category?.parentCategory?.parentCategory?.name
    product.breadcrumbs[1].name = products.product.category?.parentCategory?.name


  }


  const handlerAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name }
    console.log(data)
    dispatch(addItemToCart(data))
    navigate("/cart")
  }

  useEffect(() => {
    const data = { productId: params.productId }

    dispatch(findProductsById(data))

  }, [params.productId])

  const totalReview = products.product?.reviews.length
  const averageRating = products.product?.reviews.reduce((total, review) => total + review.rating, 0) / totalReview

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-base font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {products.product?.title}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gapx8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center justify-center	bg-slate-200">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h[35rem] ">

              <img
                alt="anh loi"
                src={products?.product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 p-5">
            <div className="lg:col-span-2 ">
              <h1 className="text-xl lg:text-xl font-semibold text-gray-900 mb-2">
                {products.product?.title}
              </h1>

              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {products.product?.brand}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">{products.product?.discountedPrice}</p>
                <p className="opacity-50 line-through">{products.product?.price}</p>
                <p className="text-green-600">{products.product?.discountPercent}% off</p>
              </div>




              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  {totalReview > 0 && (
                    <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
                  )}
                  {totalReview > 0 && (
                    <p className="font-bold text-base">({averageRating.toFixed(1)})</p>
                  )}
                
                  <p className="opacity-50 text-sm">{totalReview} Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {totalReview} Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10 space-y-5">

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >

                      {products?.product?.sizes.sort((a, b) => a.name.localeCompare(b.name)).map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.quantity}
                          className={classNames(
                            size.quantity
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                          )}
                        >
                          <span>{size.name}</span>
                          {size.quantity ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                              >
                                <line
                                  x1={0}
                                  x2={100}
                                  y1={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <Button onClick={handlerAddToCart}
                  className="flex flex-auto"
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  Thêm vào giỏ hàng
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="text-xl">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products.product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*rating and review */}
        <section>
          <h1 className="font-semibold text-lg pb-4 mt-6 ">Bình luận và đánh giá</h1>

          <div className="border p-5">
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className="space-y-5">
                  {products.product?.reviews?.map((item) => (
                    <ProductReviewCart review={item} />
                  ))}
                </div>
              </Grid>

              <Grid item xs={5}>
                <h1 className="text-xl font-semibold pb-2">Product ratings</h1>

                <div className="flex items-center space-x-3">
                  <Rating value={averageRating} precision={0.5} readOnly />
                  <p className="opacity-60">{totalReview} Ratings</p>
                </div>

                <Box className="mt-5">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Exceellent</p>
                    </Grid>

                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>

                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>

                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          color: "yellow",
                        }}
                        variant="determinate"
                        value={50}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Averange</p>
                    </Grid>

                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={25}
                        color="warning"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box className="mt-5">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>

                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={20}
                        color="error"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
