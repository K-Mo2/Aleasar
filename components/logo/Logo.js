import logoIcon from "../../public/icons/purple_tornado.svg";
import Link from "next/link";
import Image from "next/image";

const Logo = function(){
    return (
        <div className="flex flex-row items-center w-48 relative left-24 top-2">
            <div className="">
                <Link href="/">
                    <div className="">
                        <Image src={logoIcon} alt="logo-icon" width={60} height={60} className="text-[#2051C6]"/>
                    </div>
                </Link>
            </div>
            
            <div className="">
                <p className="font-fjord font-normal text-4xl text-[#2051C6] tracking-wider">Aleasar</p>
            </div>
        </div>
    );
}

export default Logo;