import Image from "next/image";


const Card = function({ image, header, description }){
    return (
        <div className="bg-white flex flex-col w-3/4 h-1/4 lg:w-1/4 lg:h-full p-4 lg:py-20 my-2 items-center text-center justify-center rounded-2xl shadow-xl border border-gray-200 hover:scale-110 transition duration-500">
            <div className="">
                <Image src={image} alt={image} />
            </div>                                        
            <p className="font-bold font-roboto text-[#07155E] text-md lg:text-xl lg:mx-2">{header}</p>
            <p className="text-black">{description}</p>
        </div>
    );
}

export default Card;