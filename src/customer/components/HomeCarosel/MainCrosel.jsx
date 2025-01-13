import React from 'react'
import { mainCarouselData } from './MainCaroselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCrosel = () => {

  const handleCLick = () =>{
    window.location.href ="/product"
  }



    const items = mainCarouselData.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} onClick={handleCLick} />)
  return (
    <div>
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    </div>
  )
}

export default MainCrosel