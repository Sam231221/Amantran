import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';

const CarouselImage = () => {
    const images = [
        "../images/g-adventures.jpg",
        "../images/intrepid.jpg",
        "../images/trafalgar.jpg",
        "../images/travel-talk.jpg"
    ];

      const [itemNum, setItemNum] = useState(0);
  const [movingRight, setMovingRight] = useState(true);

  const leftClickHandler =()=>{
    setItemNum((num)=>num-1);
    setMovingRight(false);

const rightClickHandler =()=>{
    setItemNum((num)=>num+1);
    setMovingRight(true);
  };
  // console.log(movingRight)
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      // console.log(itemNum, itemNum == images.length-1, movingRight);

      if(movingRight)
      {  setItemNum((num)=>num+1);
      // console.log("right")
      }
      else if(!movingRight)
      {setItemNum((num)=>num-1);
        // console.log("left");
      }

      //when second last item is reached and moving right, movingRight shall be set to false so that in next last item, the itemNum will be reduced to go to previous item
      if(itemNum == images.length-2 && movingRight)
        setMovingRight(!movingRight);
      //when 2nd item is reached and we're moving left, for 1st item we have to set the direction to right
      else if(itemNum == 1 && !movingRight)
        setMovingRight(!movingRight);
    }, 3000);
});

  return (
        <div id="outer-wrapper">
            <div id="carousel-container">
                {images.map((image, index)=>{
                return (
                    <div className="carousel-item" style={{transform:`translateX(calc(-${itemNum} * 100%))`}} key={`carousel-item${index}`}>
                    <img src={image} alt="" />
                    <h1>
                    This is menu item-{index}
                    </h1>
                    </div>
                )
                })}
            </div>
            <FaAngleDoubleLeft onClick={()=>leftClickHandler()} style={{display:(itemNum==0)?"none":"block"}} />
            <FaAngleDoubleRight onClick={()=>rightClickHandler()} style={{display:(itemNum==images.length-1)?"none":"block"}} />
            </div>
  )
}
  }
export default CarouselImage
