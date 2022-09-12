import Card from "../cards/Card.jsx";
import developmentIcon from "../../public/icons/development.svg";
import productivityIcon from "../../public/icons/productivity.svg";
import prevalenceIcon from "../../public/icons/prevalence.svg";
import quoteIcon from "../../public/icons/quote.svg";
import Image from "next/image";

export default function Services(){
return (
    <section className="bg-gray-100 flex flex-col  lg:items-center lg:justify-around w-full min-h-full max-w-screen-3xl" id="services">

                
                    <div className='flex flex-col lg:flex-col lg:w-4/6 mx-8 my-10'>
                    <div className='lg:relative lg:right-10 lg:top-8'>
                        <Image src={quoteIcon} alt="quote-icon" height={30} width={30}/> <br />
                    </div>
                    <p className='font-roboto h-fit font-bold text-3xl lg:text-5xl text-[#07155E]'>We create the top brands in the market.</p> <br />
                    <p className='font-roboto h-fit font-bold text-3xl lg:text-5xl text-[#2051C6]'>Come Grow With Us!</p>
                    </div>

                    <div className='flex flex-col items-center justify-around lg:flex-row lg:relative lg:w-full lg:h-1/4 lg:justify-around h-fit'>
                    <Card image={developmentIcon} header={"Development"} description={"We can make your business the upcoming trend."}/>
                    <Card image={productivityIcon} header={"Productivity"} description={"Take your productivity to the next step."}/>
                    <Card image={prevalenceIcon} header={"Prevalence"} description={"Become the number one competitor in the market."}/>
                    </div>

                    <div className="lg:w-full"></div>
                
    </section>
);
}