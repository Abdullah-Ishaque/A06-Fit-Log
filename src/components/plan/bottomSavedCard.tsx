'use client'
import { CardContext } from '@/context/CardContext';
import { ICard } from '@/types/card.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const BottomSavedCard = ({card} : {card : ICard}) => {

    const { saveForLater , setSaveForLater } = useContext(CardContext)
    
        const hanndleRemove = () => {
            const remove = saveForLater.filter((c) => c != card)
            setSaveForLater([...remove])
            toast.warning(`${card.name} removed`);
        }
    

    return (
        <div className='flex justify-between pb-4 w-full'>
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

                    <div className="flex gap-4 mt-2 text-sm text-gray-300">
                        <span className='flex items-center'><CiClock2 /> {card.duration} min</span>
                        <span className='flex items-center'><PiFireSimpleFill /> {card.caloriesBurned} kcal</span>
                        <span className='flex items-center'><CiStar /> {card.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Link href={`/details/${card.id}`}>
                <button className="border border-gray-600 text-white px-5 py-2 rounded-full hover:opacity-80 cursor-pointer">
                    View Details
                </button>
                </Link>
                <button className="text-gray-500 text-xl hover:opacity-80 cursor-pointer" onClick={() => hanndleRemove()}>
                    <RxCross2 />
                </button>
            </div>
        </div>
    );
};

export default BottomSavedCard;