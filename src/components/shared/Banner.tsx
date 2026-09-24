import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-[#0C0D10]">
            <div className="hero-content flex-col justify-between lg:flex-row-reverse  w-full h-[448] border-0 rounded-2xl m-8 bg-[#222630] pl-8 pr-8">
                <Image
                    alt="Banner"
                    src="/banner.png"
                    width="334"
                    height="334"
                    priority
                />
                <div>
                    <p className="text-[#C2F800] mb-8">WORKOUT LIBRARY</p>
                    <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />
                        EVERY SET.</h1>
                    <p className="py-6">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
                        {"into today's plan, and watch the week's work add up."}
                    </p>
                    <button className="btn btn-active bg-[#C2F800] text-black font-bold">BROWSE WORKOUTS</button>
                    {/* C2F800 */}
                </div>
            </div>
        </div>
    );
};

export default Banner;