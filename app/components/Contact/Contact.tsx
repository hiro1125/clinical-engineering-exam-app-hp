import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:my-24'>
      <p className='lg:text-7xl text-5xl font-semibold mb-10 lg:mt-0 mt-10'>
        お問い合わせ
      </p>
      <p className='lg:text-3xl text-2xl lg:mb-10 lg:m-0 m-4'>
        アプリを使用して、不具合などに関して下記のお問い合わせフォームよりお願いいたします。
      </p>
      <Link
        className='text-2xl lg:mb-10 mb-6 lg:mt-0 mt-6 rounded-full bg-blue-400 hover:bg-blue-800 text-white px-10 py-5'
        href={'EnquiryForm'}
        target='_blank'
      >
        お問い合わせはこちら
      </Link>
    </div>
  );
};

export default Contact;
