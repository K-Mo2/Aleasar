import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/Button.jsx';
import dashBoardImage from "../../public/icons/Social Dashboard-pana.svg";

const Home = function(){
return(
    <section className=''>
        <div className='flex flex-col lg:flex-row w-screen justify-around md:items-center mt-10 max-w-screen-3xl'>
                    <div className='flex flex-wrap w-full md:w-4/6 lg:w-2/6 md:mt-10 lg:mt-0'>
                    <p className='w-auto relative lg:bottom-4 font-roboto h-fit font-bold text-3xl lg:text-6xl text-center lg:text-left p-2 leading-[2.5rem] lg:leading-[5rem] text-[#07155E]'>The <span className='text-[#2051C6]'>Cheapest</span> Price For The Top <span className='text-[#2051C6]'>Marketing Solution</span> </p>
                    <p className='text-[#636769] text-md lg:text-xl p-2 lg:w-3/4 text-center lg:text-left font-roboto font-bold'>We are a leading agency in marketing and advertising, come join us now!</p>
                    
                    <Link href="#contactUs">  
                        <div className='w-auto relative left-1/4 lg:left-0 ml-3 md:ml-10 mb-10 md:top-10 lg:bottom-16'>
                            <Button text="Join Now!"/>
                        </div>
                    </Link>
                    </div>
                
                    <div className='lg:relative lg:bottom-16 lg:right-20 inline-block'>
                    <Image src={dashBoardImage} alt="dashboard-image" width={800} height={700}/>
                    </div>  
                </div>
        </section>
);
}

export default Home;