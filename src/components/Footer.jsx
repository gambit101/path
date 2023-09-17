import { FaFacebook, FaLinkedinIn, FaPinterestSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="bg-blue-900 mt-20">
                <img className="mx-auto pt-20" src="https://pathedits.com/cdn/shop/t/4/assets/logo-path-light.svg?v=69308361320828345081644625049" alt="" />
                <div className="flex justify-center gap-10 mt-16">
                    <FaTwitter className="text-3xl text-gray-400"></FaTwitter>
                    <FaFacebook className="text-3xl text-gray-400"></FaFacebook>
                    <FaPinterestSquare className="text-3xl text-gray-400"></FaPinterestSquare>
                    <FaLinkedinIn className="text-3xl text-gray-400"></FaLinkedinIn>
                </div>
                <div className="flex justify-center gap-5 mt-20 pb-20">
                    <a className="text-white font-bold text-sm" href="">HOME</a>
                    <a className="text-white font-bold text-sm" href="">ABOUT</a>
                    <a className="text-white font-bold text-sm" href="">TESTIMONIALS</a>
                    <a className="text-white font-bold text-sm" href="">PRICING</a>
                    <a className="text-white font-bold text-sm" href="">SERVICES</a>
                    <a className="text-white font-bold text-sm" href="">HELP</a>
                    <a className="text-white font-bold text-sm" href="">LOGIN</a>
                    <a className="text-white font-bold text-sm" href="">FREE TRIAL</a>
                    <a className="text-white font-bold text-sm" href="">CLIPPING PATH INDIA</a>
                </div>
            </div>
            <div className="bg-gray-400 pt-10 pb-7">
                <div className="flex justify-center gap-7">
                    <h1 className="text-blue-800 font-bold text-sm text-center" href="">TERMS & CONDITIONS</h1>
                    <h1 className="text-blue-800 font-bold text-sm text-center" href="">PRIVACY POLICY</h1>
                </div>
                <h1 className="text-blue-800 text-xs font-semibold mt-7 text-center" href="">Path is a brand of Outsource Experts Ltd. © 2023 All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;