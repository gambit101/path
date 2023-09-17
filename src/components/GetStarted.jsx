import { BsArrowRight } from "react-icons/bs";

const GetStarted = () => {
    return (
        <div className="mt-20">
            <img className="w-32 h-32 mx-auto" src="https://pathedits.com/cdn/shop/t/4/assets/heart.svg?v=160260055015786820361665943400" alt="" />
            <h2 className="text-4xl mt-7 font-bold text-center text-blue-800">Find the time to fall in love with your work again</h2>
            <button className="text-xl font-bold text-white p-4 bg-cyan-400 rounded-xl flex gap-3 mx-auto mt-10">GET STARTED <BsArrowRight className="text-white font-bold text-xl mt-1"></BsArrowRight></button>
        </div>
    );
};

export default GetStarted;