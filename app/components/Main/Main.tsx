import React from 'react';
import Image from 'next/image';
import topScreen from '/app/Images/top-screen.jpg';

const Main = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='flex'>
        <Image src={topScreen} width={700} height={700} alt='top-screen' />
        <div className='w-1/2 flex flex-col items-center justify-center'>
          <p className='text-7xl font-semibold text-center mb-4'>
            国家試験対策
          </p>
          <p className='text-3xl text-center'>
            臨床工学技士試験対策アプリです。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
