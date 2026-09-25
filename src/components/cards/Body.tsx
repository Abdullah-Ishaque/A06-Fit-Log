import FitCards from './FItCards';
import { ICard } from '../../types/card.type';

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


const Body = async () => {

    
    const cardsData = await getCards();

    return (
        <div className='pb-10'>
            <div className='Container mx-auto'>
                <h1 className='font-bold text-4xl'>THE LIBRARY</h1>
                <p className='mt-4 text-gray-500'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='Container mx-auto grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {
                    cardsData.map((card : ICard, id : number) => {
                       return <FitCards key={id} card={card}/>
                    })
                }
            </div>
        </div>
    );
};

export default Body;