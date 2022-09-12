import React from 'react'
import Image from 'next/image'
import catchyAd from "../../public/icons/catchyAd.jpg";
import cosmeticsAd from "../../public/icons/cosmeticsAd.jpg";
import cyberCityAd from "../../public/icons/cyberCity.jpg";
import fruitsAd from "../../public/icons/fruitsAd.jpg";
import juiceAd from "../../public/icons/juiceAd.jpg";
import porcheAd from "../../public/icons/porcheAd.jpg";
import studyBlueAd from "../../public/icons/studyBlueAd.jpg";
import studyOrangeAd from "../../public/icons/studyOrangeAd.jpg";


export default function Portfolio() {
  return (
    <section className='min-h-fit w-full flex flex-col lg:flex-wrap justify-around' id='portfolio'>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={catchyAd} alt="catchyAd"  className='rounded-2xl'/>
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={cosmeticsAd} alt="cosmeticsAd"  className='rounded-2xl'/>
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={cyberCityAd} alt="cyberCityAd"  className='rounded-2xl'/>
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={fruitsAd} alt="fruitsAd"  className='rounded-2xl'/>
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={juiceAd} alt="juiceAd"  className='rounded-2xl'/>
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={porcheAd} alt="porcheAd"  className='rounded-2xl'/>
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={studyBlueAd} alt="studyBlueAd"  className='rounded-2xl'/>
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={studyOrangeAd} alt="studyOrangeAd"  className='rounded-2xl'/>
            </div>
             
            
    </section>
  )
}
