// import React from 'react'
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import AliceCarousel from "react-alice-carousel";
// import { Button } from "@mui/material";
// import { KeyboardArrowLeft } from '@mui/icons-material';
// import { useState } from "react";
// import { mens_kurta } from '../../../Data/Men/men_kurta';
// const HomeSectionCarousel = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
    
//     const slidePrev = () => setActiveIndex(activeIndex - 1);
//     const slideNext = () => setActiveIndex(activeIndex + 1);
//     const syncActiveIndex = ({ item }) => setActiveIndex(item);

//     const responsive = {
//         0: {
//             items: 2,
//             //   itemsFit: "contain",
//         },
//         568: {
//             items: 3,
//             //   itemsFit: "contain",
//         },
//         1024: {
//             items: 5.5,
//             //   itemsFit: "contain",
//         },
//     };


//     const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
//     return (
//         <div className="border">
//             <div className="relative p-5">
//                 <AliceCarousel
//                     disableButtonsControls
//                     disableDotsControls
//                     mouseTracking
//                     items={items}
//                     activeIndex={activeIndex}
//                     responsive={responsive}
//                     onSlideChanged={syncActiveIndex}
//                     // animationType="fadeout"
//                     // animationDuration={2000}
//                 />
//                 {activeIndex !== items.length - 5 && 
//                 <Button
//                     onClick={slideNext}
//                     variant="contained"
//                     className="z-50 bg-white"
//                     sx={{
//                         position: "absolute",
//                         top: "8rem",
//                         right: "0rem",
//                         transform: "translateX(50%) rotate(90deg)",
//                         bgcolor: "white"
//                     }}
//                     aria-label="next"
//                 >
//                     <KeyboardArrowLeft
//                         sx={{ transform: "rotate(90deg)", color: "black"  }}
//                     />
//                 </Button>
//              }

//                 {activeIndex !== 0 && 
//                 <Button
//                     onClick={slidePrev}
//                     variant="contained"
//                     className="z-50 bg-white"
//                     sx={{
//                         position: "absolute",
//                         top: "8rem",
//                         left: "0rem",
//                         transform: "translateX(-50%)  rotate(-90deg)",
//                         bgcolor: "white"
//                     }}
//                     aria-label="next"
//                 >
//                     <KeyboardArrowLeft
//                         sx={{ transform: " rotate(90deg)", color: "black"  }}
//                     />
//                 </Button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default HomeSectionCarousel

import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { mens_kurta } from '../../../Data/Men/men_kurta';

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return newIndex;
    });
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex;
      return newIndex;
    });
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="" >
      <h2 className='text-2xl font-extrabold text-gray-900 py-5'>{sectionName}</h2>
      <div className='border relative p-5'>
      <AliceCarousel
        key={activeIndex} // Force re-rendering when activeIndex changes
        disableButtonsControls
        disableDotsControls
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
        mouseTracking // Enable mouse tracking for testing
      />

      {activeIndex > 0 && (
      <Button
        onClick={slidePrev}
        variant="contained"
        sx={{
          position: 'absolute',
          top: '8rem',
          left: '0rem',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          bgcolor: 'white',
          zIndex: 50,
        }}
        aria-label="previous"
      >
        <KeyboardArrowLeft sx={{transform: "rotate(-90deg)", color: 'black' }} />
      </Button>
    )}

      {activeIndex !== items.length - 5  && (
      <Button
        onClick={slideNext}
        variant="contained"
        sx={{
          position: 'absolute',
          top: '8rem',
          right: '0rem',
          transform: 'translate(50%, -50%) rotate(-90deg)',
          bgcolor: 'white',
          zIndex: 50,
        }}
        aria-label="next"
      >
        <KeyboardArrowRight sx={{transform: " rotate(90deg)", color: 'black' }} />
      </Button>
      )}
    </div>
    </div>
  );
};

export default HomeSectionCarousel;
