import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-[1640px] max-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* overlay */}
                <div className='absolute w-full flex flex-col justify-center h-full text-gray-200 max-h-[500px] bg-black/40'>
                    <h1 className='text-4xl px-4 sm:text-4xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-orange-500 font-bold'>Best</span></h1>
                    <h1 className='text-4xl px-4 sm:text-4xl md:text-5xl lg:text-6xl font-bold'><span className='text-orange-500 font-bold'>Foods</span> Deliveried</h1>
                </div>
                <img className='max-h-[500px] object-cover w-full' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Banner;