import SaveForLaterButton from '@/components/bookButton/SaveForLaterButton';
import TodaysPlanButton from '@/components/bookButton/TodaysPlanButton';
import { ICard } from '@/types/card.type';
import Image from 'next/image';
import React from 'react';

interface ICardDetailsPageProps {
  params: Promise<{
    ID: string;
  }>;
}

const getCards = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
  }
  catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
}

const cardDetails = async ({ params }: ICardDetailsPageProps) => {

  const { ID } = await params;
  const cardsData = await getCards();

  const card = cardsData.find(
    (card: ICard) => String(card.id) === String(ID)
  )

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 bg-[#101216] text-white p-4 sm:p-5 md:p-6 rounded-xl">

      <Image
        src={card.image}
        alt={card.name}
        width={600}
        height={600}
        className="w-full h-auto md:h-full object-cover rounded-xl"
      />

      <div>

        <h1 className="text-2xl sm:text-3xl font-bold uppercase">
          {card.name}
        </h1>

        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          {card.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">

          {card.muscleGroups.map((muscle: string, i: number) => (
            <span
              key={i}
              className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {muscle}
            </span>
          ))}

        </div>

        <div className="bg-[#181c24] mt-6 rounded-xl overflow-hidden">

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Equipment</span>
            <span className="text-right">{card.equipment}</span>
          </div>

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Difficulty</span>
            <span className="text-right">{card.difficulty}</span>
          </div>

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Sets</span>
            <span>{card.sets}</span>
          </div>

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Reps</span>
            <span>{card.reps}</span>
          </div>

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Duration</span>
            <span>{card.duration} min</span>
          </div>

          <div className="flex justify-between gap-4 p-3 border-b border-gray-700">
            <span className="text-gray-400">Calories</span>
            <span>{card.caloriesBurned} kcal</span>
          </div>

          <div className="flex justify-between gap-4 p-3">
            <span className="text-gray-400">Rating</span>
            <span>{card.rating}</span>
          </div>

        </div>

        <h2 className="font-bold mt-6 uppercase">
          Instructions
        </h2>

        <ol className="list-decimal pl-5 mt-3 space-y-2 text-gray-300 text-sm sm:text-base">

          {card.instructions.map((inst: string, i: number) => (
            <li key={i}>
              {inst}
            </li>
          ))}

        </ol>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <TodaysPlanButton card={card}/>
          <SaveForLaterButton card={card}/>
        </div>

      </div>

    </div>
  );
};

export default cardDetails;