import React from 'react'
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {aspire,abhinav, airtel,british,colgate,delhimetro,dpworld,edusky,foundation,g2market,jcb,john,midways,nov,radington,school,shubham,sos,univer,vlcc} from '../assests/clientlogo' 


const Clients = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:2000,
        cssEase:'linear'

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