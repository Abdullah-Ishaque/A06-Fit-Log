'use client'

import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';

const TopBarSaved = () => {

    const { saveForLater } = useContext(CardContext);

    const savedMinute = saveForLater.reduce(
        (acc, num) => acc + Number(num.duration),
        0
    );

    const calories = saveForLater.reduce(
        (acc, num) => acc + Number(num.caloriesBurned),
        0
    );

    return (
        <div className="grid grid-cols-3 w-full items-center">

            <div className="text-center">
                <h1 className="text-xs sm:text-base">Exercise</h1>
                <h1 className="text-[#CCFF00] font-bold text-xl sm:text-2xl">
                    {saveForLater.length}
                </h1>
            </div>

            <div className="text-center">
                <h1 className="text-xs sm:text-base">Minutes</h1>
                <h1 className="font-bold text-xl sm:text-2xl">
                    {savedMinute}
                </h1>
            </div>

            <div className="text-center">
                <h1 className="text-xs sm:text-base">Calories</h1>
                <h1 className="font-bold text-xl sm:text-2xl">
                    {calories}
                </h1>
            </div>

        </div>
    );
};

export default TopBarSaved;