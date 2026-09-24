'use client'
import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';

const TopBarPlan = () => {

    const { todayPlan} = useContext(CardContext)
    const planMinute = todayPlan.reduce((acc,num) => acc + Number(num.duration),0);
    const calories = todayPlan.reduce((acc,num) => acc + Number(num.caloriesBurned),0);


    return (
        <div className='flex gap-80'>
            <div>
                <h1>Exercise</h1>
                <h1 className='text-[#CCFF00] font-bold text-2xl'>{todayPlan.length}</h1>
            </div>
            <div className='font-bold text-2xl'> 
                <h1>Minutes</h1>
                <h1>{planMinute}</h1>
            </div>
            <div className='font-bold text-2xl'>
                <h1>Calories</h1>
                <h1>{calories}</h1>
            </div>
        </div >
    );
};

export default TopBarPlan;