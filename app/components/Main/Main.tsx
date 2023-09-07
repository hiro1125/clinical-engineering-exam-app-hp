import React from 'react';
import Image from 'next/image';
import topScreen from '/app/Images/top-screen.jpg';

const Main = () => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='lg:flex'>
        <Image src={topScreen} width={700} height={700} alt='top-screen' />
        <div className='lg:w-1/2 lg:flex flex-col items-center justify-center'>
          <p className='lg:text-7xl text-5xl font-semibold text-center lg:mb-4 m-5'>
            国家試験対策
          </p>
          <p className='lg:text-3xl text-xl text-center lg:mb-0 mb-5 '>
            臨床工学技士試験対策アプリです。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
