import React from 'react';
import Image from 'next/image';
import topScreen from '/app/Images/top-screen.jpg';

const Main = () => {
  return (
    <div className=' bg-gray-200'>
      <Image src={topScreen} width={500} height={500} alt='top-screen' />
    </div>
  );
};

export default Main;
