import React, { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='w-full text-4xl'>
      <div className='text-black p-10'>{title}</div>
    </div>
  );
};

export default Header;
