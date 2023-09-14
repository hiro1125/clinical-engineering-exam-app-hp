import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full lg:p-10 p-5 lg:text-3xl bg-slate-300 text-center'>
      <div className='flex gap-12 justify-center items-center lg:text-3xl text-lg font-medium'>
        © hi-sa 2023
        <Link
          className='lg:text-2xl hover:underline'
          href={'PrivacyPolicy'}
          target='_blank'
        >
          プライバシーポリシー
        </Link>
      </div>
    </div>
  );
};

export default Footer;
