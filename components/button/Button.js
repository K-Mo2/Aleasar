const Button = function({ text }){
    return (
        <div className="bg-[#2051C6] w-48 h-20 rounded-lg cursor-pointer flex items-center text-center justify-center relative bottom-14 shadow-2xl shadow-[#2051C6]">
            <div>
                <p className="text-white font-bold text-2xl font-roboto "> {text} </p>
            </div>
        </div>
    );
}

export default Button;