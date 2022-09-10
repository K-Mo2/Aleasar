import Image from "next/image";

const ContactCard = function({ image, header, description, contactData }){
    return (
            
                <div className="bg-white flex lg:flex-col lg:w-1/4 lg:h-72 lg:p-1 lg:items-center text-center lg:justify-center rounded-2xl hover:scale-110 transition duration-500">
                <div className="">
                    <Image src={image} alt={image} height={50} width={50}/>
                </div>                                        
                
                <div className="lg:my-2">
                    <p className="font-bold font-roboto text-[#07155E] lg:text-xl">{header}</p>
                </div>
                
                <p>{description}</p>
                
                <div className="bg-[#E1E3E8] rounded-2xl lg:p-4 lg:px-10 lg:mt-6">
                    <p>{contactData}</p>
                </div>

            </div>
            
    );
}

export default ContactCard;