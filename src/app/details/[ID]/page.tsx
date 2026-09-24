import { ICard } from '@/components/types/card.type';
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

  const card = cardsData.find((card: ICard) => String(card.id) === String(ID))
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#101216] text-white p-6 rounded-xl">

      <Image
        src={card.image}
        alt={card.name}
        width={600}
        height={600}
        className="w-full h-full object-cover rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold uppercase">
          {card.name}
        </h1>

        <p className="text-gray-400 mt-2">
          {card.description}
        </p>

        <div className="flex gap-2 mt-4">
          {card.muscleGroups.map((muscle: string[], i: number) => (
            <span
              key={i}
              className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="bg-[#181c24] mt-6 rounded-xl overflow-hidden">
          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Equipment</span>
            <span>{card.equipment}</span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Difficulty</span>
            <span>{card.difficulty}</span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Sets</span>
            <span>{card.sets}</span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Reps</span>
            <span>{card.reps}</span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Duration</span>
            <span>{card.duration} min</span>
          </div>

          <div className="flex justify-between p-3 border-b border-gray-700">
            <span className="text-gray-400">Calories</span>
            <span>{card.caloriesBurned} kcal</span>
          </div>

          <div className="flex justify-between p-3">
            <span className="text-gray-400">Rating</span>
            <span>{card.rating}</span>
          </div>
        </div>

        <h2 className="font-bold mt-6 uppercase">
          Instructions
        </h2>

        <ol className="list-decimal pl-5 mt-3 space-y-2 text-gray-300">
          {card.instructions.map((inst: string[], i: number) => (
            <li key={i}>
              {inst}
            </li>
          ))}
        </ol>

        <div className="flex gap-3 mt-6">
          <button className="bg-lime-400 text-black px-5 py-3 rounded-lg font-semibold">
            {" Add to today's plan"}
          </button>

          <button className="border border-gray-600 px-5 py-3 rounded-lg">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );

};

export default cardDetails;