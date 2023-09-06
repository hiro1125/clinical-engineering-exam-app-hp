import React, { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='lg:fixed text-3xl lg:text-left text-center top-0 left-0 right-0 text-white backdrop-blur-md z-50'>
      <div className='text-black lg:p-10 p-8 lg:text-4xl font-bold'>
        {title}
      </div>
    </div>
  );
};

export default Header;
