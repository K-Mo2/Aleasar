import Link from "next/link";

const Navigation = function(){
    return (
        <nav className="flex flex-row justify-around w-2/4 relative left-48 mt-4 z-50">
            
            <Link href="/">
                <div className="text-[#8A8A8A] hover:text-[#2051C6] transition text-lg font-medium duration-500 cursor-pointer">Home</div>
            </Link>
            
            <div className="text-[#8A8A8A] hover:text-[#2051C6] transition text-lg font-medium duration-500 cursor-pointer">Services</div>
            <div className="text-[#8A8A8A] hover:text-[#2051C6] transition text-lg font-medium duration-500 cursor-pointer">Portfolio</div>
            <div className="text-[#8A8A8A] hover:text-[#2051C6] transition text-lg font-medium duration-500 cursor-pointer">Testimonials</div>
            
            <Link href="/contactUs">
                <div className="text-[#8A8A8A] hover:text-[#2051C6] transition text-lg font-medium duration-500 cursor-pointer">Contact Us</div>
            </Link>
        </nav>
    );
}

export default Navigation;