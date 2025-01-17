'use client'

import react from "react"
import './pricing.css'

const PricingCard = ({id, price, pricePlan}) =>{
    return(
        <div className=" cs1 border-white group space-y-4 border=[1px] duration-300 ease-linear cursor-pointer" key={id}>
            <div className="flex justify-center items-end px-20 py-6">
                <h1 className="text-2xl font-bold">$</h1>
                <span className="text-5xl font-bold">{price}</span>
                <h1>/month</h1>
            </div>
            <h1 className=" cs2 bg-gray-800 p-2 text-center font-medium group-hover:bg-orange-400 duration-300">{pricePlan}</h1>
            <div className="flex flex-col items-center space-y-4 py-6">
                <p className="inline-block border-b-[1px] px-6 pb-3">Group Classes</p>
                <p className="inline-block border-b-[1px] px-6 pb-3">Discuss fitness goal</p>
                <p className="inline-block border-b-[1px] px-6 pb-3">Group trainer</p>
                <p className="inline-block border-b-[1px] px-6 pb-3">Fitness orientation</p>
            </div>
        </div>
    )
}

export default PricingCard