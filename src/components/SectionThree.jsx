
const SectionThree = () => {
    return (
        <div>
            <div className="mt-20 flex justify-center">
                <button className="p-5 text-lg mx-auto bg-[#7e6ef3] text-white font-bold rounded-xl">LOAD MORE POSTS</button>

            </div>
            <div className="flex justify-center gap-20 mt-20 bg-gradient-to-r from-blue-300 to-violet-200 h-72 items-center">
                <img className="w-20 h-20" src="https://pathedits.com/cdn/shop/t/4/assets/heart.svg?v=160260055015786820361665943400" alt="" />
                <h1 className="text-blue-900 font-semibold text-2xl">30,000 sales and marketing pros get <br />our insights, tips, and best practices <br /> delivered weekly.</h1>
                <div>
                    <p className="text-sm text-blue-700">TYPE YOUR EMAIL</p>
                    <input className="p-3 rounded-xl mr-2" type="email" name="" id="" />
                    <button className="p-3 text-lg mx-auto bg-[#7e6ef3] text-white font-bold rounded-xl">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;