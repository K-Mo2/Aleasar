const Button = function({ text }){
    return (
        <div className="bg-[#2051C6] w-40 lg:w-48 h-14 lg:h-16 rounded-lg cursor-pointer flex items-center text-center justify-center hover:shadow-lg hover:shadow-[#2051C6]">
            <div>
                <p className="text-white font-bold text-lg lg:text-2xl font-roboto "> {text} </p>
            </div>
        </div>
    );
}

export default Button;