'use client'

import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';

const TopBarPlan = () => {

    const { todayPlan } = useContext(CardContext);

    const planMinute = todayPlan.reduce(
        (acc, num) => acc + Number(num.duration),
        0
    );

    const calories = todayPlan.reduce(
        (acc, num) => acc + Number(num.caloriesBurned),
        0
    );

    return (
        <div className="grid grid-cols-3 w-full items-center">

            <div className="text-center">
                <h1 className="text-xs sm:text-base">Exercise</h1>
                <h1 className="text-[#CCFF00] font-bold text-xl sm:text-2xl">
                    {todayPlan.length}
                </h1>
            </div>

            <div className="text-center">
                <h1 className="text-xs sm:text-base">Minutes</h1>
                <h1 className="font-bold text-xl sm:text-2xl">
                    {planMinute}
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

export default TopBarPlan;