'use client'
import { CardContext } from '@/context/CardContext';
import { ICard } from '@/types/card.type';
import Image from 'next/image';
import React, { useContext } from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { ImCheckmark } from 'react-icons/im';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const BottomPlanCard = ({ card }: { card: ICard }) => {

    const { todayPlan, setTodayPlan } = useContext(CardContext);

    const hanndleRemove = () => {
        const removed = todayPlan.filter((c) => c != card);
        setTodayPlan([...removed]);
        toast.warning(`${card.name} removed`);

    }
    const handleButton = () => {
        toast.success(`${card.name} marked as done`);
    }

    return (
        <div className='flex justify-between pb-4'>
            <div className="flex items-center gap-4">
                <Image
                    src={card.image}
                    alt={card.name}
                    width={125}
                    height={70}
                    className="w-32 h-20 object-cover rounded-lg"
                />

                <div className='flex flex-col justify-between text-left gap-2'>
                    <h2 className="font-bold text-white uppercase text-lg">
                        {card.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                        {card.equipment}
                    </p>

                    <div className="flex mt-2 text-sm text-gray-300 justify-between gap-8">
                        <span className='flex items-center'><CiClock2 /> {card.duration} min</span>
                        <span className='flex items-center'><PiFireSimpleFill /> {card.caloriesBurned} kcal</span>
                        <span className='flex items-center'><CiStar /> {card.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="border border-gray-600 text-white px-5 py-2 rounded-full">
                    View Details
                </button>

                <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold flex justify-between items-center" onClick={() => handleButton()}>
                    <ImCheckmark /> <h1>Mark as Done</h1>
                </button>

                <button className="text-gray-500 text-xl" onClick={() => hanndleRemove()}>
                    <RxCross2 />
                </button>
            </div>
        </div>
    );
};

export default BottomPlanCard;