import Image from 'next/image';
import { ICard } from '../../types/card.type';
import { CiClock2, CiStar } from 'react-icons/ci';
import { PiFireSimpleFill } from 'react-icons/pi';
import Link from 'next/link';

interface cardProps {
    card: ICard
}


const FitCards = ({ card }: cardProps) => {

    return (
        <Link href={`/details/${card.id}`}>
            <div>
                <div className="card bg-base-100 w-auto h-auto shadow-sm">
                    <figure>
                        <Image
                            src={card.image}
                            alt={card.name}
                            width={420}
                            height={300}
                        />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-4 items-center sm:pl-50 lg:pl-0'>
                            {
                                card.muscleGroups.map((muscle: string, i: number) => {
                                    return <h1 key={i} className=' w-[60] h-[21] bg-[#C2F800] text-black font-bold rounded-2xl text-center'>{muscle}</h1>
                                })
                            }

                        </div>
                        <h1 className='sm:pl-50 lg:pl-0 font-bold text-2xl'>{card.name}</h1>
                        <h1 className='text-gray-400 sm:pl-50 lg:pl-0'>{card.equipment}</h1>
                        <div className="card-actions pt-4">
                            <hr className='sm:w-200 lg:w-90 border-[1] border-gray-600' />
                            <div className='flex pt-2 sm:pl-50 sm:gap-40 lg:pl-0 lg:gap-3 '>
                                <div className='flex justify-between items-center gap-1'>
                                    <h1><CiClock2 /></h1>
                                    <h1> {card.duration}</h1>
                                </div>
                                <div className='flex justify-between items-center gap-1'>
                                    <h1><PiFireSimpleFill /></h1>
                                    <h1> {card.caloriesBurned}</h1>
                                </div>
                                <div className='flex justify-between items-center gap-1'>
                                    <h1><CiStar /></h1>
                                    <h1> {card.rating}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FitCards;