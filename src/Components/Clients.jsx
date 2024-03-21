import React from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {aspire,abhinav, airtel,british,colgate,delhimetro,dpworld,edusky,foundation,g2market,jcb,john,midways,nov,radington,school,shubham,sos,univer,vlcc} from '../assests/clientlogo' 


const Clients = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow:7, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        cssEase:'linear',
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }

          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }

          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }

          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }

          },
          
        ]


      };

  return (
    <div className='py-20 mt-16 mb-16'> 
        <Slider {...settings} className='' > 
            <img src = {abhinav} className='h-[100px] '/> 
            <img src = {airtel} className='h-[100px]' />
            <img src = {aspire}  className='h-[100px]'/>
            <img src = {british} className='h-[100px]' />
            <img src = {colgate} className='h-[100px]' />
            <img src = {delhimetro} className='h-[100px]'/>
            <img src = {dpworld} className='h-[100px]'/> 
            <img src = {edusky} className='h-[100px]'/> 
            <img src = {foundation} className='h-[100px]'/> 
            <img src = {g2market} className='h-[100px]'/> 
            <img src = {jcb} className='h-[100px]'/> 
            <img src = {john} className='h-[100px]'/> 
            <img src = {midways} className='h-[100px]'/> 
            <img src = {nov} className='h-[100px]'/> 
            <img src = {radington} className='h-[100px]'/> 
            <img src = {school} className='h-[100px]'/> 
            <img src = {shubham} className='h-[100px]'/> 
            <img src = {sos} className='h-[100px]'/> 
            <img src = {univer} className='h-[100px]'/> 
            <img src = {vlcc} className='h-[100px]'/> 
            
            


        </Slider>
    </div>
  )
}

export default Clients