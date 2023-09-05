import React, { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='fixed top-0 left-0 right-0 text-white text-4xl backdrop-blur-md z-50'>
      <div className='text-black p-10'>{title}</div>
    </div>
  );
};

export default Header;
