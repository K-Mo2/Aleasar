import Image from "next/image";


const Card = function({ image, header, description }){
    return (
        <div className="flex flex-col w-48 h-48 items-center text-center justify-center rounded-lg shadow-md">
            <div className="">
                <Image src={image} alt={image} />
            </div>                                        
            <p className="font-bold font-roboto text-[#07155E] text-xl mx-2">{header}</p>
            <p>{description}</p>
        </div>
    );
}

export default Card;