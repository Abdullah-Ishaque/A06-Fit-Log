'use client'

import { CardContext } from "@/context/CardContext";
import { ICard } from "@/types/card.type";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const TodaysPlanButton = ({ card }: { card: ICard }) => {
    const { todayPlan, setTodayPlan } = useContext(CardContext)

    const doubleClick = todayPlan.find((one: ICard) => {
        return (String(card.id) === String(one.id)) ? 1 : 0;
    })
    const handleTodaysPlanButton = () => {
        if (doubleClick) {
            toast.error(`${card.name} already added`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            setTodayPlan([...todayPlan, card]);
            toast(`${card.name} aded`);
        }
    }

    return (
        <button className="bg-lime-400 text-black px-5 py-3 rounded-lg font-semibold" onClick={() => handleTodaysPlanButton()}>
            {"Add to today's plan"}
        </button>
    );
};

export default TodaysPlanButton;