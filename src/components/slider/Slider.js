import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import One from "../../../assets/1.jpeg";
import Two from "../../../assets/2.jpeg";
import Three from "../../../assets/3.jpeg";

import Four from "../../../assets/4.jpeg";
import Five from "../../../assets/5.jpeg";
import Six from "../../../assets/6.jpeg";
import Seven from "../../../assets/7.jpeg";
import Eight from "../../../assets/8.jpeg";
import Nine from "../../../assets/9.jpeg";
import Ten from "../../../assets/10.jpeg";
import Eleven from "../../../assets/11.jpeg";
import Twelve from "../../../assets/12.jpeg";
import Thirtheen from "../../../assets/13.jpeg";
import Fourtheen from "../../../assets/14.jpeg";
import Fiftheen from "../../../assets/15.jpeg";
import Sixtheen from "../../../assets/16.jpeg";
import Seventheen from "../../../assets/17.jpeg";
import Eighteen from "../../../assets/18.jpeg";
import Ninetheen from "../../../assets/19.jpeg";
import Twenty from "../../../assets/20.jpeg";
import TwentyOne from "../../../assets/21.jpeg";
import TwentyTwo from "../../../assets/22.jpeg";
import TwentyThree from "../../../assets/23.jpeg";
import TwentyFour from "../../../assets/24.jpeg";
import TwentyFive from "../../../assets/25.jpeg";
import TwentySix from "../../../assets/26.jpeg";
import TwentySeven from "../../../assets/27.jpeg";
import TwentyEight from "../../../assets/28.jpeg";
import TwentyNine from "../../../assets/29.jpeg";
import Thirty from "../../../assets/30.jpeg";
import ThirtyOne from "../../../assets/31.jpeg";
// import ThirtyTwo from "../../../assets/32.jpeg";
import ThirtyThree from "../../../assets/33.jpeg";
import ThirtyFour from "../../../assets/34.jpeg";

import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { FiArrowDown } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import Arrow from "../../../assets/arrow.svg";
import ArrowLeft from "../../../assets/arrow-left.svg";
SwiperCore.use([Navigation]);

const Slider = () => {

    const images = [
        { img: One },
        { img: Two },
        { img: Three },
        { img: Four },
        { img: Five },
        { img: Six },
        { img: Seven },
        { img: Eight },
        { img: Nine },
        { img: Ten },
        { img: Eleven },
        { img: Twelve },
        { img: Thirtheen },
        { img: Fourtheen },
        { img: Fiftheen },
        { img: Sixtheen },
        { img: Seventheen },
        { img: Eighteen },
        { img: Ninetheen },
        { img: Twenty },
        { img: TwentyOne },
        { img: TwentyTwo },
        { img: TwentyThree },
        { img: TwentyFour },
        { img: TwentyFive },
        { img: TwentySix },
        { img: TwentySeven },
        { img: TwentyEight },
        { img: TwentyNine },
        { img: Thirty },
        { img: ThirtyOne },
        // { img: ThirtyTwo },
        { img: ThirtyThree },
        { img: ThirtyFour },
    ];

    return (
        <div className='relative rounded-t-[5px]'>
            <Swiper
                slidesPerView={1}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                loop
                className="custom-navigation lg:h-auto h-72  lg:w-[350px] rounded-t-[5px]"

            >


                {
                    images?.map((item) => {
                        return <>
                            <SwiperSlide>
                                <Image src={item?.img} />
                            </SwiperSlide></>
                    })
                }
                {/* <SwiperSlide>
                    <Image src={Imge}  />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Imge}  />
                </SwiperSlide> */}

                <div className="custom-swiper-button-prev  absolute cursor-pointer left-2 top-[25%] lg:top-[40%]  rounded-full z-20 w-14 h-14 p-3">
                    {/* Insert your custom next arrow icon or element here */}
                    <Image src={ArrowLeft} /> {/* <MdArrowBackIosNew    /> */}
                </div>
                <div className="custom-swiper-button-next absolute cursor-pointer right-2 top-[25%] lg:top-[40%]  rounded-full z-20 w-14 h-14 p-3">
                    <Image src={Arrow} />  {/* Insert your custom previus arrow icon or element here */}

                </div>
            </Swiper>
        </div>
    );
};

export default Slider;
