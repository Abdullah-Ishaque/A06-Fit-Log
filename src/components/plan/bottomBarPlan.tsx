'use client'

import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react';
import BottomPlanCard from './bottomPlanCard';
import { ICard } from '@/types/card.type';
import Link from 'next/link';

const BottomBarPlan = () => {
    const { todayPlan } = useContext(CardContext);

    return (
        <div className="flex items-center justify-between w-full h-auto bg-[#12151b] border-b border-gray-800 p-4 rounded-2xl">

            {todayPlan.length > 0 ? (
                <div className='w-full h-auto pt-6'>
                    {
                        todayPlan.map((cardd: ICard, id: number) => (
                            <BottomPlanCard key={id} card={cardd} />
                        ))
                    }
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full text-center py-10">
                    <h1 className="font-bold text-2xl">
                        NOTHING HERE YET
                    </h1>

                    <p className="pb-6">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link href="/workout">
                        <button className="btn btn-active btn-success">
                            Go to workouts
                        </button>
                    </Link>
                </div>
            )}

        </div>
    );
};

export default BottomBarPlan;