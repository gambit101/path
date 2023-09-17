import { BsStopwatch } from "react-icons/bs";
const LeftSide = () => {
    return (
        <div>
            <div>
                <img className="w-[587px] h-[330px]" src="https://pathedits.com/cdn/shop/articles/image3.jpg?v=1693765661" alt="" />
                <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                <h1 className="text-5xl font-semibold text-blue-900 mt-3">What Is Photo Editing?: <br /> A Definition</h1>
                <p className="text-2xl text-blue-900 mt-3 font-semibold">Learning what photo editing is can help you <br /> understand how to use it to create product photos <br /> that convert.</p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
            </div>
            <div className="mt-24">
                <img className="w-[587px] h-[330px]" src="https://pathedits.com/cdn/shop/articles/image21.jpg?v=1692015411" alt="" />
                <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                <h1 className="text-5xl font-semibold text-blue-900 mt-3">How to Add a Shadow <br /> in Photoshop for <br />Product Photos</h1>
                <p className="text-2xl text-blue-900 font-semibold mt-3">Learning what photo editing is can help you <br /> understand how to use it to create product photos <br /> that convert.</p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;