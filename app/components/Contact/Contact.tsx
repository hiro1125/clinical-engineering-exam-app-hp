import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24'>
      <p className='text-7xl font-semibold mb-10'>お問い合わせ</p>
      <p className='text-3xl mb-10'>
        アプリを使用して、不具合などに関して下記のお問い合わせフォームよりお願いいたします。
      </p>
      <Link
        className='text-2xl mb-10 rounded-full bg-blue-400 hover:bg-blue-800 text-white px-10 py-5'
        href={'EnquiryForm'}
        target='_blank'
      >
        お問い合わせはこちら
      </Link>
    </div>
  );
};

export default Contact;
