import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../components/logo/Logo";
import Navigation from "../components/navigation/Navigation";
import whiteTornado from "../public/icons/white_tornado.svg";
import ContactCard from "../components/cards/ContactCard";
import callIcon from "../public/icons/call.svg";
import locationIcon from "../public/icons/location.svg";
import mailIcon from "../public/icons/mail.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import facebookIcon from "../public/icons/facebook.svg";
import whatsappIcon from "../public/icons/whatsapp.svg";
import instagramIcon from "../public/icons/instagram.svg";


const ContactUs = function(){
    
    const router = useRouter();

    return (
       <div className="bg-[#4B73D1] lg:h-96 lg:w-screen">
            <header className='flex lg:flex-row lg:items-center lg:relative lg:top-4'>
                <Logo logoIcon={whiteTornado}/>          
                <Navigation path={router.pathname}/>
            </header>

            <div className="lg:w-2/4 lg:relative lg:top-20 lg:left-96 lg:pl-36">
                <p className="font-medium font-roboto lg:text-5xl text-white">Contact Information</p>
            </div>

            <div className="flex lg:flex-row lg:justify-around lg:items-center lg:w-full lg:h-auto lg:relative lg:top-1/4">
                <ContactCard image={callIcon} header={"Call Us!"} description={"For direct contact, you can call us on these numbers."} contactData={"971-4-2518600"}/>
                <ContactCard image={locationIcon} header={"Visit Us!"} description={"We would love to see you in person."} contactData={"A B PLAZA 2, Hor Al Anz East"}/>
                <ContactCard image={mailIcon} header={"Email Us!"} description={"Our team will reach you as soon as possible."} contactData={"ALSHROK2005@GMAIL.COM"}/>
            </div>

            <div className="flex lg:flex-row lg:justify-around lg:w-2/4 lg:relative lg:top-72 lg:left-1/4 ">
                    <div className="cursor-pointer">
                        <Image src={linkedinIcon} alt="linkedin-icon"  height={60} width={60}/>
                    </div>

                    <div className="cursor-pointer">
                        <Image src={whatsappIcon} alt="whatsapp-icon"  height={60} width={60}/>
                    </div>

                    <div className="cursor-pointer">
                        <Image src={facebookIcon} alt="facebook-icon"  height={60} width={60}/>
                    </div>

                    <div className="cursor-pointer">
                        <Image src={instagramIcon} alt="instagram-icon" height={60} width={60} />
                    </div>

                </div>

       </div>
    );
}

export default ContactUs;