import { ICard } from '@/types/card.type';
import Image from 'next/image';
import React from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

const BottomPlanCard = ({ card }: { card: ICard }) => {
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

                <div>
                    <h2 className="font-bold text-white uppercase text-lg">
                        {card.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                        {card.equipment}
                    </p>

                    <div className="flex gap-4 mt-2 text-sm text-gray-300">
                        <span><CiClock2 /> {card.duration} min</span>
                        <span><PiFireSimpleFill /> {card.caloriesBurned} kcal</span>
                        <span><CiStar /> {card.rating}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="border border-gray-600 text-white px-5 py-2 rounded-full">
                    View Details
                </button>

                <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold">
                    ✓ Mark as Done
                </button>

                <button className="text-gray-500 text-xl">
                    <RxCross2 />
                </button>
            </div>
        </div>
    );
};

export default BottomPlanCard;