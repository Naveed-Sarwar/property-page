import React, { useState } from 'react'
import { TfiPlus, TfiMinus } from "react-icons/tfi";
const Faq = () => {
    const [show, setShow] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);

    return (
        <div>


            <p className='text-[27px] font-bold text-black -leading-[0.75px] '>FAQ</p>
            <div className='grid lg:grid-cols-2  gap-x-10'>
                <div>
                    <div className='my-5'>
                        <div onClick={() => setShow(!show)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] flex flex-wrap w-4/5'>What does it mean when an Aasthi property is 'onboarding?</p>
                            {
                                show ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            show && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>"Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Aasthi property is hosting guests for the first time.


                                    During onboarding, the Aasthi team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                    <br />  Some responsibilities that our team must perform during this period include:
                                    End-to-end sourcing, acquisition, and implementation of a complete furniture package for the property.
                                    Applying for and obtaining the appropriate licensure and permitting requirements in order to operate a short-term rental in the area.
                                    <br />
                                    Organizing vendor management and guest solutions technologies for a best-in-class guest experience.
                                    Creating turn-key marketing materials, including professional photography of the property.
                                    Enhancing or adding amenities to the property that are aligned with our revenue-optimization strategy.
                                    <br />      Aasthi's real estate team is meticulous over the details that make a vacation rental business stand out from the crowd - it's why Aasthi has garnered invite-only honors, like being Superhost on Airbnb and a Premier Host on VRBO. Much of this magic happens during onboarding.
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-5'>
                        <div onClick={() => setShowOne(!showOne)} className='cursor-pointer flex items-center  justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5'>What happens after I make an investment?</p>
                            {
                                showOne ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showOne && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    Once an investor has placed their investment order, our team works to process your payment along with all other investor orders and close the offering - there are no further actions required! This process can take a few weeks.
                                    Our team is also working diligently to prepare the Aasthi property for guests. <br />  This process varies in time depending on the property and local destination market - on average, onboarding can take up to ninety days or longer. Once ready, your new Aasthi property will begin accepting bookings, and guests from all over the world will be visiting your very own vacation rental property.
                                    If you'd like to learn about what goes into Aasthi's onboarding period, you can read more about it here.
                                    <br />
                                    Once onboarding is completed, the property will begin generating income from booking revenue. If the property generates sufficient funds to make payouts, you'll receive your pro-rata share on a quarterly basis. You can view the expected first payout date for each Aasthi property on the property's offering page. Investors are entitled to their pro-rata share of net booking income from the very first day that the property is rented out by guests. Each payout will be deposited directly into your Aasthi account.
                                </p>
                            </>
                        }
                    </div>
                    <div className='my-5'>
                        <div onClick={() => setShowFive(!showFive)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>What am I buying?</p>
                            {
                                showFive ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showFive && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>

                                    When you purchase shares in an Aasthi property offering, you are directly buying ownership in the Series of the Aasthi LLC that owns a specific property and are eligible to receive potential quarterly payouts derived from booking income as well as potential property value appreciation.

                                </p>
                            </>
                        }
                    </div>
                    {/* <div className='my-5'>
                        <div onClick={() => setShowTwo(!showTwo)} className='cursor-pointer items-center flex justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>How will rental income be distributed to investors?</p>
                            {
                                showTwo ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showTwo && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>  "Onboarding" refers to the period of time in between when we close on a new acquisition and when the respective Here property is hosting guests for the first time.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    During onboarding, the Here team is hard at work transitioning the property from vacation home status to vacation rental status, and this period can vary in time based on the nature of the property and the local destination market in which the property is located.
                                </p>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>        Some responsibilities that our team must perform during this period include:
                                </p>
                            </>
                        }
                    </div> */}
                </div>
                <div>
                    <div className='lg:my-5'>
                        <div onClick={() => setShowThree(!showThree)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>What management fees does Aasthi collect?</p>
                            {
                                showThree ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showThree && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    Aasthi collects two management fees for our service:
                                    <br />
                                    Asset Management Fee - We collect a quarterly asset management fee of 0.25% based on the total asset value of each property on the platform. The fee is paid out of the income from the property each quarter. This fee covers services such as asset management, automated payout distributions, and investor relations.
                                    <br />
                                    Property Management Fee - We collect a property management fee of 25% based on the gross revenue that a property generates over the lifetime of its operations. This fee is paid out of the income from the property each month. This fee covers services such as property cleaning scheduling, guest relations, maintenance and repair management, and booking optimization, among other responsibilities.
                                </p>

                            </>
                        }
                    </div>
                    <div className='my-3'>
                        <div onClick={() => setShowFour(!showFour)} className='cursor-pointer flex items-center justify-between'>
                            <p className='font-semibold text-[1rem] w-4/5 lg:w-auto'>How will rental income be distributed to investors?</p>
                            {
                                showFour ? <TfiMinus fontSize={24} /> : <TfiPlus fontSize={24} />
                            }
                        </div>
                        {
                            showFour && <>
                                <p className='text-[0.9rem] pt-2 leading-[1.3rem] font-normal'>
                                    Any payouts will be deposited directly into your Aasthi account. If the property generates sufficient funds to make cash distributions, you will receive your pro-rata distribution quarterly within 45 to 60 days of the start of a new quarter. You can view the expected first payout date for each Aasthi property on the property's offering page.
                                    <br />
                                    On each payment date, an investor will receive their pro-rata share of booking income after deducting expenses, such as property management fees, asset management fees, property taxes, insurance costs, repair costs, any HOA fees, reserves for liabilities and contingencies (e.g., expected capital expenditures), and any other costs and expenses based on the investor's percentage ownership.<br />
                                    There may be periods where a payout is not possible if the cash needed to fund costs, plus cash reserves for liabilities and contingencies, is greater than the rental income.






                                </p>
                            </>
                        }
                    </div>
                  
                </div>
            </div>
        </div>

    )
}

export default Faq