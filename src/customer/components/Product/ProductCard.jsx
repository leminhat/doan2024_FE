import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import React from "react";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  return (

    <div onClick={() => navigate(`/product/${product.id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="textPart bg-gray-500 p-3">
        <div>
          <p className="font-bold opacity-60 text-lg">{product.brand}</p>
          <p className="italic">{product.title}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="line-through opacity-50">{product.price}</p>
          {product.discountPercent && (
           
           <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">-{product.discountPercent}%</span>)}

            <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{product.discountedPrice}</span>
        


        </div>
      </div>
    </div>
  );
};

export default ProductCard;