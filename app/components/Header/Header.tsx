import React, { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='w-full text-center text-6xl items-center'>
      <div className='fixed top-0 left-0 w-full bg-white text-black p-10 z-50'>
        {title}
      </div>
    </div>
  );
};

export default Header;
