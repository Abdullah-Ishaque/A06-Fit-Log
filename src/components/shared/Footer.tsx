import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (

        <div className='bg-[#0C0D10] pt-10 pb-10 border-t-[1] border-t-gray-500'>
            <div className='Container mx-auto w-full h-auto flex justify-between'>
                <div className='flex justify-between gap-2'>
                    <Image src="/logo.png" alt='Logo' width={20} height={20} />
                    <h1>FITLOG</h1>
                </div>
                <div>
                    <h1 className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</h1>
                </div>
            </div>
        </div>


    );
};

export default Footer;