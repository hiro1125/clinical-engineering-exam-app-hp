import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-7xl font-semibold mt-20 mb-10'>お問い合わせ</p>
      <p className='text-3xl mb-10'>
        アプリを使用して、不具合などは下記お問い合わせフォームよりお願いいたします。
      </p>
      <button className='text-2xl mb-10 rounded-full bg-blue-400 hover:bg-blue-800 text-white px-10 py-5'>
        お問い合わせはこちら
      </button>
    </div>
  );
};

export default Contact;
