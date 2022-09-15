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
    <section className='bg-white min-h-fit w-full flex flex-col lg:flex-row lg:flex-wrap justify-around' id='portfolio'>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1602333869619-f05b7f19d3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFkdmVydGlzaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="catchyAd"  className='rounded-2xl'  width={400} height={600} />
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1546333603-2895edefc462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxhZHZlcnRpc2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cosmeticsAd"  className='rounded-2xl' width={400} height={600} />
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWR2ZXJ0aXNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} alt="cyberCityAd"  className='rounded-2xl' width={400} height={600} />
            </div>
                        
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={fruitsAd} alt="fruitsAd"  className='rounded-2xl' width={400} height={600} />
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGFkdmVydGlzaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="juiceAd"  className='rounded-2xl' width={400} height={600} />
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1583717754414-05b42568e7ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY0fHxhZHZlcnRpc2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="porcheAd"  className='rounded-2xl' width={400} height={600} />
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1617695744007-68ef55752789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGFkdmVydGlzaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="studyBlueAd"  className='rounded-2xl' width={400} height={600} />
            </div>
            
            <div className='w-3/4 lg:w-2/12 mx-10 my-10 hover:scale-110 transition duration-500'>
                <Image src={"https://images.unsplash.com/photo-1558365916-848463c5d803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGFkdmVydGlzaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="studyOrangeAd"  className='rounded-2xl' width={400} height={600} />
            </div>
             
            
    </section>
  )
}
