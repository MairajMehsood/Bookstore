import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


const Freebook = () => {

const filterData = list.filter((data) => data.Category === "Free");
console.log(filterData);

// slick slider
var settings = {
    dots: true,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 w-full py-[120px]  '>
        <div className='mb-12'>
        <h1 className=' text-2xl font-bold'>Free offer courses</h1>
        <p className='text-sm mt-4 max-w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente doloribus reprehenderit aliquam! Perferendis mollitia nobis sunt corrupti nesciunt accusantium officia necessitatibus. Iure totam quasi optio dignissimos officiis blanditiis reiciendis numquam iste soluta magni nulla, accusantium cum neque dolores incidunt ullam nemo earum vitae eaque, consectetur sequi veritatis. Totam, laudantium?</p>
        </div>

        <div className="slider-container ">
      <Slider {...settings}>
          {filterData.map((item)=>{
            return(
                <Cards item={item} key={item.id}/>
            )
          })}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook