import Image from "next/image";

const ContactCard = function({ image, header, description, contactData }){
    return (
            
                <div className="bg-white flex flex-col w-3/4 md:w-2/4 lg:w-1/4 h-auto lg:h-auto p-4 lg:py-10 my-2 items-center text-center lg:justify-center rounded-2xl hover:scale-110 transition duration-500">
                <div className="w-10 h-10">
                    <Image src={image} alt={image} />
                </div>                                        
                
                <div className="lg:my-2">
                    <p className="font-bold font-roboto text-[#07155E] lg:text-xl">{header}</p>
                </div>
                
                <p>{description}</p>
                
                <div className="flex flex-wrap items-center justify-between bg-[#E1E3E8] rounded-2xl p-4 lg:px-10 lg:mt-6">
                    {Array.isArray(contactData) ? contactData.map((data)=> <p key={data} className="text-black">{data}</p>) : <p className="text-black">{contactData}</p>}
                </div>

            </div>
            
    );
}

export default ContactCard;