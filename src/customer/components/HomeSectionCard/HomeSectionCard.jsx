// import React from 'react'

// const HomeSectionCard = ({product}) => {
//     return (
//         <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
//             <div className="h-[13rem] w-[10rem]">
//                 <img className="object-cover object-top w-full h-full"
//                     src={product?.image || product?.imageUrl}
//                     // src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
//                     // alt={product?.title}
//                     alt=""
//                 />
//             </div>
//             <div className="p-4 ">
//                 <h3 className="text-lg font-medium text-gray-900">
//                     {product?.brand || product?.title}
//                     {/* Nofilter */}
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-500">
//                     {product?.title}
//                     {/* Men solid pure cotton */}
//                     </p>
//             </div>
//         </div>
//     );
// };

// export default HomeSectionCard

import React from "react";

import { useNavigate } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
