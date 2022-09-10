import Link from "next/link";
import Image from "next/image";

const Logo = function({ path, logoIcon }){
    return (
        <div className="flex lg:flex-row lg:items-center lg:w-48 lg:relative lg:left-24 lg:top-2 cursor-pointer">
            <div className="">
                <Link href="/">
                    <div className="">
                        <Image src={logoIcon} alt="logo-icon" width={60} height={60} />
                    </div>
                </Link>
            </div>
            
            <Link href="/">
                <div className="">
                    <p className={`font-fjord font-normal lg:text-4xl ${path == "/" ? "text-[#2051C6]" : "text-white"} tracking-wider `}>Aleasar</p>
                </div>
            </Link>

        </div>
    );
}

export default Logo;