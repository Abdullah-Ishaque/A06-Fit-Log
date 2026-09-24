'use client';

import { CardContext } from '@/context/CardContext';
import { ICard } from '@/types/card.type';
import React, { useContext } from 'react';
import BottomPlanCard from './bottomPlanCard';
import Link from 'next/link';

const BottomBarSaved = () => {
  const { saveForLater } = useContext(CardContext);

  return (
    <div className="flex items-center justify-between w-full h-auto bg-[#12151b] border-b border-gray-800 p-4 rounded-2xl">

      {saveForLater.length > 0 ? (
        saveForLater.map((cardd: ICard, id: number) => (
          <BottomPlanCard key={id} card={cardd} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center w-full text-center py-10">
          <h1 className="font-bold text-2xl">
            NOTHING SAVED YET
          </h1>

          <p className="pb-6">
            Save workouts you want to try later.
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

export default BottomBarSaved;