import Head from 'next/head'
import Image from 'next/image';
import purpleTornado from "../public/icons/purple_tornado.svg";
import burgerIcon from "../public/icons/burger.svg"
import Logo from '../components/logo/Logo.jsx';
import Navigation from '../components/navigation/Navigation.jsx';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import ContactUs from '../components/about/ContactUs';
import Home from '../components/home/Home';
import Services from '../components/services/Services';

export default function Index() {

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  return (
    <div>
      <Head>
        <title>Aleasar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/purple_tornado.svg" />
      </Head>

      <section className='w-screen h-screen' id="home">

        <header className='flex flex-row items-center justify-between lg:justify-start px-2 lg:items-center lg:sticky lg:py-4 sticky top-0 z-30 bg-white border-b lg:border-none '>
          <Logo logoIcon={purpleTornado} path={router.pathname} />          
          <Navigation path={router.pathname} />
          <div className='lg:hidden z-30 bg-white flex rounded-lg p-1' onClick={()=> setIsOpen(!isOpen) }>
            <Image src={burgerIcon} alt="burger-icon" height={30} width={30} />
          </div>
        </header>

        <div className={`rounded felx felx-col fixed ${isOpen ? "-translate-x-3/4" : ""} -right-3/4 w-3/4 bg-[#07155E] h-full z-30 transition duration-500 lg:hidden`}>
          <Link href="#home">
              <div className='w-full ml-20 my-10 text-white transition text-lg font-medium duration-500 cursor-pointer'>Home</div>
          </Link>
          
          <Link href="">
              <div className='w-full ml-20 my-10 text-white transition text-lg font-medium duration-500 cursor-pointer'>Services</div>
          </Link>
          
          <Link href="">
              <div className='w-full ml-20 my-10 text-white transition text-lg font-medium duration-500 cursor-pointer'>Portfolio</div>
          </Link>
          
          <Link href="#contactUs">
              <div className='w-full ml-20 my-10 text-white transition text-lg font-medium duration-500 cursor-pointer'>Contact Us</div>
          </Link>
        </div>

        <Home />
        <Services />
        <ContactUs />
      </section>


    </div>
  )
}
