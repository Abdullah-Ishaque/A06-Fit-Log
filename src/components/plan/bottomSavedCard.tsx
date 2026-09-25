'use client'

import { CardContext } from '@/context/CardContext';
import { ICard } from '@/types/card.type';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CiClock2, CiStar } from 'react-icons/ci';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const BottomSavedCard = ({ card }: { card: ICard }) => {

    const { saveForLater, setSaveForLater } = useContext(CardContext);

    const hanndleRemove = () => {
        const remove = saveForLater.filter((c) => c != card);
        setSaveForLater([...remove]);
        toast.warning(`${card.name} removed`);
    }

    return (
        <div>

            <div className="flex md:hidden flex-col gap-4 pb-6 border-b border-gray-800 mb-5">

                <Image
                    src={card.image}
                    alt={card.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                />

                <div className="flex flex-col gap-2 text-left">

                    <h2 className="font-bold text-white uppercase text-lg">
                        {card.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                        {card.equipment}
                    </p>

                    <div className="flex flex-col gap-2 text-sm text-gray-300 mt-2">

                        <span className="flex items-center gap-1">
                            <CiClock2 />
                            {card.duration} min
                        </span>

                        <span className="flex items-center gap-1">
                            <PiFireSimpleFill />
                            {card.caloriesBurned} kcal
                        </span>

                        <span className="flex items-center gap-1">
                            <CiStar />
                            {card.rating}
                        </span>

                    </div>

                    <Link href={`/details/${card.id}`}>
                        <button className="w-full border border-gray-600 text-white px-5 py-2 rounded-full hover:opacity-80 cursor-pointer mt-2">
                            View Details
                        </button>
                    </Link>

                    <button
                        className="w-full border border-gray-700 text-gray-400 px-5 py-2 rounded-full flex justify-center items-center hover:opacity-80 cursor-pointer"
                        onClick={hanndleRemove}
                    >
                        <RxCross2 />
                    </button>

                </div>

            </div>



            <div className="hidden md:flex justify-between items-center pb-4 w-full">

                <div className="flex items-center gap-4">

                    <Image
                        src={card.image}
                        alt={card.name}
                        width={125}
                        height={70}
                        className="w-32 h-20 object-cover rounded-lg"
                    />

                    <div className="flex flex-col justify-between text-left gap-2">

                        <h2 className="font-bold text-white uppercase text-lg">
                            {card.name}
                        </h2>

                        <p className="text-gray-400 text-sm">
                            {card.equipment}
                        </p>

                        <div className="flex gap-4 mt-2 text-sm text-gray-300">

                            <span className="flex items-center">
                                <CiClock2 /> {card.duration} min
                            </span>

                            <span className="flex items-center">
                                <PiFireSimpleFill /> {card.caloriesBurned} kcal
                            </span>

                            <span className="flex items-center">
                                <CiStar /> {card.rating}
                            </span>

                        </div>

                    </div>

                </div>

                <div className="flex items-center gap-3">

                    <Link href={`/details/${card.id}`}>
                        <button className="border border-gray-600 text-white px-5 py-2 rounded-full hover:opacity-80 cursor-pointer">
                            View Details
                        </button>
                    </Link>

                    <button
                        className="text-gray-500 text-xl hover:opacity-80 cursor-pointer"
                        onClick={hanndleRemove}
                    >
                        <RxCross2 />
                    </button>

                </div>

            </div>

        </div>
    );
};

export default BottomSavedCard;