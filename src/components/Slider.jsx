import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsStopwatch } from "react-icons/bs";


const Slider = () => {
    return (
        <div className='mx-36 mt-20 mb-10 z-0'>
            <h1 className=' my-16 text-4xl text-blue-700'>Articels in <span className='font-bold '>Etsy</span></h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='h-72 w-full'>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/product_photo_size_requirements.png?v=1647983796" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/etsy-product-photography-tips.jpg?v=1566157403" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/image_file_type_product_photography.png?v=1666726469" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/product_photo_size_requirements.png?v=1647983796" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/etsy-product-photography-tips.jpg?v=1566157403" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='' src="https://pathedits.com/cdn/shop/articles/image_file_type_product_photography.png?v=1666726469" alt="" />
                    <p className="font-semibold text-cyan-500 text-sm mt-3">PHOTO EDITING</p>
                    <h1 className="text-2xl font-bold text-blue-900 mt-3">Product Photo Size Requirements: How to Optimize Photos for Omnichannel Selling</h1>
                    <p className=" text-blue-900 mt-3 font-medium">Tips and tricks to help you create high-quality product photos that <br /> lead to sales—even on a DIY budget. </p>
                <div className="flex mt-3 gap-2">
                    <BsStopwatch className="text-cyan-600"></BsStopwatch>
                    <p className="text-sm mb-2">7 min read | SEP 02, 23 | BY ALEXANDRA SHEEHAN</p>
                </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;