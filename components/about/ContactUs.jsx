import Image from "next/image";
import ContactCard from "../cards/ContactCard";
import callIcon from "../../public/icons/call.svg";
import locationIcon from "../../public/icons/location.svg";
import mailIcon from "../../public/icons/mail.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import facebookIcon from "../../public/icons/facebook.svg";
import whatsappIcon from "../../public/icons/whatsapp.svg";
import instagramIcon from "../../public/icons/instagram.svg";
import Link from "next/link";

const ContactUs = function(){
    

    return (
       <section className="bg-[#4B73D1] flex flex-col justify-around min-h-screen max-w-screen" id="contactUs">

            <div className="lg:w-2/4 relative top-5 lg:top-5 lg:left-1/4 lg:pl-34 my-4 lg:my-10">
                <p className="font-medium font-roboto text-center text-3xl lg:text-5xl text-white">Contact Information</p>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:w-full lg:h-auto relative top-5 lg:bottom-0 ">
                <ContactCard image={callIcon} header={"Call Us!"} description={"For direct contact, you can call us on these numbers."} contactData={["971-4-2518600", "+971 56 332 2733", "0563322733", "(04) 251 8600", "(04) 343 9308", "(04) 346 7154"]}/>
                <ContactCard image={locationIcon} header={"Visit Us!"} description={"We would love to see you in person."} contactData={"A B PLAZA 2, Hor Al Anz East, Dubai"}/>
                <ContactCard image={mailIcon} header={"Email Us!"} description={"Our team will reach you as soon as possible."} contactData={"info@aleasaradvertising.com hr@aleasaradvertising.com"}/>
            </div>
            
            <div className="mx-auto rounded mt-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.4862668186416!2d55.34969763497415!3d25.27797607291711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x837923ff8c1539bf!2zMjXCsDE2JzQwLjgiTiA1NcKwMjAnNTkuMSJF!5e0!3m2!1sen!2seg!4v1664912292529!5m2!1sen!2seg" width="2000" height="400" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="googlemaps"></iframe>
            </div>
            
            <div className="flex flex-row justify-around w-2/4 lg:w-1/4 mx-auto mt-10 mb-20">
                    
                    <Link href="https://www.linkedin.com/company/aleasar">
                        <div className="cursor-pointer mx-2 lg:m-0">
                            <Image src={linkedinIcon} alt="linkedin-icon"  height={60} width={60}/>
                        </div>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=+971 56 332 2733">
                        <div className="cursor-pointer mx-2 lg:m-0">
                            <Image src={whatsappIcon} alt="whatsapp-icon"  height={60} width={60}/>
                        </div>
                    </Link>

                    <Link href="https://www.facebook.com/Aleasar-108149445377319">
                        <div className="cursor-pointer mx-2 lg:m-0">
                            <Image src={facebookIcon} alt="facebook-icon"  height={60} width={60}/>
                        </div>
                    </Link>

                    <Link href="https://www.instagram.com/Aleasar_Inc/">
                        <div className="cursor-pointer mx-2 lg:m-0">
                            <Image src={instagramIcon} alt="instagram-icon" height={60} width={60} />
                        </div>
                    </Link>

                </div>
                
       </section>
    );
}

export default ContactUs;