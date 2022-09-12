import Link from "next/link";

const Navigation = function({ path }){
    
    return (
        <nav className="hidden lg:flex lg:flex-row lg:justify-around lg:w-2/4 lg:relative lg:left-48 lg:mt-4 lg:z-10">
            
            <Link href="#home">
                <div className={ `${path == "/" ? "text-[#2051C6] hover:text-[#2051C6]" : "text-white hover:text-[#42fef7]"}   transition text-lg font-medium duration-500 cursor-pointer`}>Home</div>
            </Link>
            
            <Link href="#services">
                <div className={ `${path == "/" ? "text-[#8A8A8A] hover:text-[#2051C6]" : "text-white hover:text-[#42fef7]"} transition text-lg font-medium duration-500 cursor-pointer`}>Services</div>
            </Link>
            
            <Link href="#portfolio">
            <div className={ `${path == "/" ? "text-[#8A8A8A] hover:text-[#2051C6]" : "text-white hover:text-[#42fef7]"} transition text-lg font-medium duration-500 cursor-pointer`}>Portfolio</div>
            </Link>
            
            <Link href={`#contactUs`}>
                <div className={ `${path == "/contactUs" ? "text-[#42fef7]" : "text-[#8A8A8A] hover:text-[#2051C6]"} transition text-lg font-medium duration-500 cursor-pointer`}>Contact Us</div>
            </Link>
        </nav>
    );
}

export default Navigation;