'use client';
import { CardContext } from '@/context/CardContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const Navbar = () => {

    const { todayPlan, saveForLater } = useContext(CardContext);



    const [workOutButton, setWorkoutButton] = useState(1);
    const [myPlanButton, setMyPlanButton] = useState(0);

    const handleWorkOutButton = () => {
        setWorkoutButton(1);
        setMyPlanButton(0);
    }
    const handleMyPlanButton = () => {
        setMyPlanButton(1);
        setWorkoutButton(0);
    }



    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#0C0D10] border-b border-gray-700 sticky top-0 z-50">

            <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>

                    <div className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={28}
                            height={28}
                            priority
                        />

                        <h1 className="font-bold text-lg">
                            FITLOG
                        </h1>
                    </div>

                </div>

                <div className="hidden md:flex gap-2">
                    {
                        (workOutButton) ? <Link href="/workout">
                            <button className="btn bg-[#1A2312] text-[#C2F800]" onClick={() => handleWorkOutButton()}>
                                Workouts
                            </button>
                        </Link>
                            :
                            <Link href="/workout">
                                <button className="btn bg-transparent" onClick={() => handleWorkOutButton()}>
                                    Workouts
                                </button>
                            </Link>
                    }
                    {
                        (myPlanButton) ? <Link href="/myPlan">
                            <button className="btn bg-[#1A2312] text-[#C2F800] cursor-pointer hover:opacity-80" onClick={() => handleMyPlanButton()}>
                                My Plan
                            </button>
                        </Link>
                            :
                        <Link href="/myPlan">
                            <button className="btn bg-transparent cursor-pointer hover:opacity-80" onClick={() => handleMyPlanButton()}>
                                My Plan
                            </button>
                        </Link>
                    }


                </div>

                <div className="flex gap-4 md:gap-8">
                    <Link href="/myPlan"><button  className='flex items-center gap-2 cursor-pointer hover:opacity-80 '>Plan <span className='w-[20] h-[20] rounded-2xl bg-[#C2F800] text-black text-1xl pb-6'>{todayPlan.length}</span></button></Link>
                    <Link href="/myPlan"><button className='flex items-center gap-2 cursor-pointer hover:opacity-80 '>Saved <span className='w-[20] h-[20] rounded-2xl text-1xl items-center pb-6'>{saveForLater.length}</span></button></Link>
                </div>

            </div>

                {open && (
                    <div className="absolute top-full left-4 md:hidden bg-[#12151b] w-44 rounded-lg shadow-lg p-2">

                        <Link href="/workout">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg cursor-pointer hover:opacity-80"
                            >
                                Workouts
                            </button>
                        </Link>

                        <Link href="/myPlan">
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg cursor-pointer hover:opacity-80"
                            >
                                My Plan
                            </button>
                        </Link>

                    </div>
                )}

        </nav>
    );
};

export default Navbar;