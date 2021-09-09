import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full shadow-sm">

            <div className="relative flex items-center justify-between w-4/5 m-auto">
            
                
                <Link href="/" className="pl-8 "><a><Image src="/vercel.svg" width={128} height={77} /></a></Link>

                <div onClick={() => setIsOpen(!isOpen)} className={`px-4 cursor-pointer burger md:hidden ${isOpen ? 'burger__animation' : '' }`}>
                    <div className="h-1 m-1 w-7 item1"></div>
                    <div className="h-1 m-1 w-7 item2"></div>
                    <div className="h-1 m-1 w-7 item3"></div>

                </div>

                <div  className={`pr-8 md:block link__container ${isOpen ? 'link__container_active' : ''}`}>
                    <Link href="/"><a className="p-3 font-bold link1">Home</a></Link>
                    <Link href="/about"><a className="p-3 font-semibold link2">About</a></Link>
                    <Link href="/portfolio"><a className="p-3 font-semibold link3">Portfolio</a></Link>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;