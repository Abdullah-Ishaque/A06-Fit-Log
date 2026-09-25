'use client'

import { CardContext } from "@/context/CardContext";
import { ICard } from "@/types/card.type";
import { useContext } from "react";
import { Bounce, toast} from "react-toastify";

const SaveForLaterButton = ({ card }: { card: ICard }) => {

    const { saveForLater, setSaveForLater } = useContext(CardContext);

    const doubleClick = saveForLater.find((one: ICard) => {
        return (String(card.id) === String(one.id)) ? 1 : 0;
    })
    const handleSaveForLater = () => {
        if (doubleClick) {
            toast.error(`${card.name} already saved`, {
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
            setSaveForLater([...saveForLater, card]);
            toast(`${card.name} saved`);
        }
    }



    return (
        <button className="border border-gray-600 px-5 py-3 rounded-lg" onClick={() => handleSaveForLater()}>Save for later</button>
    );
};

export default SaveForLaterButton;