'use client'
import BottomBarPlan from '@/components/plan/bottomBarPlan';
import BottomBarSaved from '@/components/plan/bottomBarSaved';
import TopBarPlan from '@/components/plan/topBarPlan';
import TopBarSaved from '@/components/plan/topBarSaved';
import  { useState } from 'react';

const MyPlanPage = () => {

    const [planButton, setPlanButton] = useState(1);
    const [savedButton , setSavedButton] = useState(0);

    const handlePlanButton = () => {
        setPlanButton(1);
        setSavedButton(0);
    }
    const handleSavedButton = () => {
        setPlanButton(0);
        setSavedButton(1);
    }

    return (
        <div className='bg-[#0C0D10]'>
            <div className='Container mx-auto'>
                <div className='pt-8'>
                    <h1 className='font-bold text-3xl'>MY PLAN</h1>
                    <p className='pt-4'>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className="bg-base-200 h-[122] p-8 mt-8 rounded-2xl">
                    {(planButton)? <div><TopBarPlan/></div> : <div><TopBarSaved/></div>}
                </div>
                <div className='mt-4 flex justify-between mb-7'>
                    <div className='flex gap-8 rounded-2xl bg-base-200 w-[225] h-[40] pl-4 '>
                        <button className={(planButton)? `btn btn-active rounded-2xl bg-gray-800` : 'btn rounded-2xl'} onClick={() => handlePlanButton()}>{"Today's Plan"}</button>
                        <button className={(savedButton)? `btn btn-active rounded-2xl bg-gray-800` : 'btn rounded-2xl'} onClick={() => handleSavedButton()}>Saved</button>
                    </div>
                    <button>Sort</button>
                </div>
                <div className='w-full h-auto text-center'>
                    {
                        (planButton)? <BottomBarPlan/>:<BottomBarSaved/>
                    }
                </div>
            </div>
        </div>
    );
};
export default MyPlanPage;