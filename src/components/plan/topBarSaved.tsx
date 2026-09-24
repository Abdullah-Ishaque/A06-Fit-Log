'use client'
import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';

const TopBarSaved = () => {

    const { saveForLater} = useContext(CardContext)

    const savedMinute = saveForLater.reduce((acc, num) => acc + Number(num.duration), 0);
    const calories = saveForLater.reduce((acc, num) => acc + Number(num.caloriesBurned), 0);

    return (
        <div className='flex gap-80'>
            <div>
                <h1>Exercise</h1>
                <h1 className='text-[#CCFF00] font-bold text-2xl'>{saveForLater.length}</h1>
            </div>
            <div className='font-bold text-2xl'> 
                <h1>Minutes</h1>
                <h1>{savedMinute}</h1>
            </div>
            <div className='font-bold text-2xl'>
                <h1>Calories</h1>
                <h1>{calories}</h1>
            </div>
        </div >
    );
};

export default TopBarSaved;