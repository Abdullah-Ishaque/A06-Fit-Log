'use client'
import { ICard } from '@/types/card.type';
import { createContext, ReactNode, useState } from 'react'

interface ICardContext {
    todayPlan : ICard[];
    setTodayPlan : React.Dispatch<React.SetStateAction<ICard[]>>;
    saveForLater : ICard[];
    setSaveForLater : React.Dispatch<React.SetStateAction<ICard[]>>;
}

export const CardContext = createContext<ICardContext>({
    todayPlan : [],
    setTodayPlan : () => {},
    saveForLater : [],
    setSaveForLater : () => {}
});


const CardProvider = ({
    children,
}: {
    children: ReactNode
}) => {

    const [todayPlan, setTodayPlan] = useState<ICard[]>([]);
    const [saveForLater, setSaveForLater ] = useState<ICard[]>([]);

    const sharedData = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater  
    }

    return <CardContext.Provider value={sharedData}>{children}</CardContext.Provider>
};

export default CardProvider;