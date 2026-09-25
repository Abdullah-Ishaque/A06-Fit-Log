'use client';
import { ICard } from '@/types/card.type';
import BottomSavedCard from './bottomSavedCard';
import Link from 'next/link';

const BottomBarSaved = ({
  sortedSaveCards
}: {
  sortedSaveCards: ICard[]
}) => {

  return (
    <div className="w-full h-auto bg-[#12151b] border-b border-gray-800 p-4 rounded-2xl">

      {sortedSaveCards.length > 0 ? (
        <div className="w-full h-auto pt-6">

          {sortedSaveCards.map((cardd: ICard) => (
            <BottomSavedCard
              key={cardd.id}
              card={cardd}
            />
          ))}

        </div>
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