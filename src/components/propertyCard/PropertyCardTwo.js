import React from 'react'
import PropertyImg from "../../../assets/property-img.jpeg";
import Image from 'next/image';
import Slider from '../slider/Slider';
import Link from 'next/link';

const PropertyCardTwo = () => {
    return (
        <div>
            <div className='lg:border-[1px]  lg:w-[350px] relative hover:-mt-1 duration-200 ease-out'>
                <div className=" rounded-t-lg" >
                    <Slider />
                </div>
                <div className='px-4 '>

                    <div className='flex -mt-16 lg:mt-2 justify-between items-center'>
                        <p className='font-semibold text-[#333333] text-[1.5rem]'>Gatortail</p>
                        <p className='bg-[#64c464] font-bold text-[0.875rem] h-7 w-16 rounded-md items-center flex justify-center text-white'>Open</p>
                    </div>
                    <p className='pt-2'>Panama City Beach</p>
                    <br />

                </div>
                <hr />
                <div className='px-4'>
                    <div className='flex mt-2 py-2 justify-between'>
                        <p className='text-[#8d8d8d] underline underline-offset-4 decoration-dotted'>Offering amount</p>
                        <p>$750,000</p>
                    </div>
                    <div className='flex py-2 justify-between'>
                        <p className='text-[#8d8d8d] underline underline-offset-4 decoration-dotted'>Price per share</p>
                        <p>$1.00</p>
                    </div>
                    <Link href="https://checkout.stripe.com/c/pay/cs_live_a1ypOhVkGbnXKbXvmOASbopW0iLvZB5cuOY9Mp88NS7V3eCd1zdZoL8p8H#fidkdWxOYHwnPyd1blppbHNgWjA0SU9PT2pOdHVRZmRuQ3NXMElPYjVDQnVxTzVDQm41VmFdZ3czf09MVG1SUlZHPTJpS2NHPVBxV1N8R059Q3dScn90XTNkQTJTQDBIRmlqMTVCZkQ3fExANTVrNTB8TzRkPCcpJ3VpbGtuQH11anZgYUxhJz8nZ0xcYFx2NDBnYHwzNFNwZ0xOJ3gl" target="_blank"><button className='border-[1px] border-solid border-black mx-auto flex items-center justify-center w-full h-12 rounded-full text-[1.1rem] bg-black text-white hover:bg-white hover:text-black mt-8 '>Buy Shares</button> </Link></div>
                <br /> <hr />
                {/* <div className='flex py-6 px-4 justify-between'>
                    <p>86% funded</p>
                    <p className='text-[#8d8d8d]'>1703 investor</p>

                </div> */}
                {/* <div class="lg:w-full h-2 mx-4 lg:mx-0  bg-gray-200 rounded-lg">
                    <div class="h-full bg-black rounded-lg" style={{ width: "86%" }}></div>
                </div> */}
            </div>
        </div>
    )
}

export default PropertyCardTwo