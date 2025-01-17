'use client'

import react from "react"
import './pricing.css'
import PricingCard from "./PricingCard"

const priceData = [
    {
        id: 1,
        price: 8,
        pricePlan: 'one day training'
    },
    {
        id: 2,
        price: 49,
        pricePlan: 'one month training'
    },
    {
        id: 3,
        price: 65,
        pricePlan: 'one year training'
    },
]

const Pricing = () =>{
    return(
        <div style={{background: '#0f172a'}} className="min-h-screen flex flex-col justify-center items-center text-white py-8">
            <h3 data-aos='fade-up' className="text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]">Pricing Tables</h3>
            <h1 data-aos='fade-up' className="text-center text-4xl font-bold pt-3">Membership Plans</h1>
            <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {priceData.map((ele)=>(
                    <PricingCard key={ele.id} id={ele.id} price={ele.price} pricePlan={ele.pricePlan}/>
                ))}
            </div>
        </div>
    )
}

export default Pricing