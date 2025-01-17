'use client'

import Link from 'next/link'
import './navbar.css'
import { useState } from 'react'
import {MdCancel} from "react-icons/md"
import { CgMenuGridR } from "react-icons/cg"
import About from '../About/about'

export const NavLinks=[
{
    id:1,
    title: 'Home',
    link: '/',
},
{
    id:2,
    title: 'About',
    link: '/about',
},
{
    id:3,
    title: 'Reviews',
    link: '/review',
},
{
    id:4,
    title: 'Pricing',
    link: '/pricingPage',
},
{
    id:5,
    title: 'Blog',
    link: '/blogsPage',
},
] 

 function Navbar(){
    const [menu, SetMenu] = useState (false);

    const HandleChange=() =>{
        SetMenu(!menu);
    }
    
    const CloseMenu=()=>{
        SetMenu(false)
    }
    return(
        <header className='bg-black text-white'>
            <nav className='container flex items-center justify-between py-3'>
                <div>
                    <Link href={'/'}>
                    <span className='text-3xl font-bold '>Iron</span>
                    <span className='text-3xl font-bold text-orange-500'>Hub</span>
                    </Link>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex items-center gap-8'>
                        {NavLinks.map(({id, title, link})=>{
                        return(
                            <li key={id}>
                            <Link className='text-lg font-medium hover:text-orange-400 transition-all' href={link}>{title}</Link>
                            </li>
                        )})}
                    </ul>
                </div>
                <div className='md:hidden flex items-center'>
                    {menu ?(
                        <MdCancel size={25} onClick={HandleChange}/>
                    ):(
                        <CgMenuGridR size={25} onClick={HandleChange}/>
                    )}
                </div>
            </nav>
            {/* Responsive Navigation Section */}
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-black z-10 left-0 top-14 list-none font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`} >
                {NavLinks.map(({id, title, link})=>{
                    return(
                        <li key={id}>
                            <Link href={link} onClick={CloseMenu} className='text-lg font-medium hover:text-orange-400 transition-all '>
                            {title}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </header>
    )
}

export default Navbar