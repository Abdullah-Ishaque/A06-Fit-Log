import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className=' bg-[#0C0D10] flex justify-center border-b-[1] border-b-gray-400 sticky top-0 z-50'>
            <div className='Container w-full h-fullbg-[#0C0D10] flex justify-between pt-6 pb-4'>
                <div className='flex justify-between gap-4'>
                    <Image src="/logo.png" alt='Logo' width="28" height="28" priority/>
                    <h1>FITLOG</h1>
                </div>
                <div>
                    <Link href="/workout"><button className='btn btn-active w-auto h-auto bg-[#1A2312] text-[#C2F800] rounded-2xl'>Workouts</button></Link>
                    <Link href=""><button className='btn btn-active h-auto w-auto bg-transparent'>My Plan</button></Link>
                </div>
                <div className='flex gap-8'>
                    <Link href=""><button>Plan</button></Link>
                    <Link href=""><button>Saved</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;