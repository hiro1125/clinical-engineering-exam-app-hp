'use client';
import Footer from '@/app/components/Footer/Footer';
import emailjs from '@emailjs/browser';
import { ComponentProps, useRef } from 'react';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail: ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        event.currentTarget,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log('送信できました。', result.status, result.text);
          alert('メールの送信に成功しました。');
          window.close();
        },
        (error) => {
          console.log('送信できませんでした。', error.text);
          alert(
            '送信を完了できませんでした。\n通信環境などをお確かめください。'
          );
        }
      );
  };

  return (
    <>
      <div className='w-full h-full'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-4xl font-bold mt-32'>お問い合わせ</h2>
          <p className='text-3xl font-bold justify-center mt-8'>
            お問い合わせは、下記フォームよりご記入の上ご連絡ください。
          </p>
          <p className='text-3xl font-bold mt-5'>
            <span className='text-red-500'>*</span>
            は、必須事項です。
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='font-bold text-lg my-10'
          >
            <label htmlFor='mailTitleForm'>
              件名<span className='text-red-500'>*</span>
            </label>
            <input
              id='mailTitleForm'
              className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
              type='text'
              placeholder='件名'
              name='subject'
              required
            />
            <label htmlFor='mailForm'>
              メールアドレス<span className='text-red-500'>*</span>
            </label>
            <input
              id='mailForm'
              className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
              type='email'
              placeholder='例）example@gmail.com'
              name='email'
              required
            />
            <label htmlFor='mailContentForm'>
              お問い合わせ内容<span className='text-red-500'>*</span>
            </label>
            <textarea
              id='mailContentForm'
              className='border border-gray-300 rounded px-3 py-2 w-full bg-gray-100 text-xl mb-7'
              name='message'
              cols={40}
              rows={20}
              placeholder='お問い合わせ内容を入力してください'
            ></textarea>
            <button
              type='submit'
              className='mt-5 font-medium text-lg bg-blue-500 text-white py-2 px-4 rounded-full flex items-center transition duration-200 hover:bg-blue-600 active:scale-95'
            >
              <div className='svg-wrapper-1'>
                <div className='svg-wrapper'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z'></path>
                    <path
                      fill='currentColor'
                      d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                    ></path>
                  </svg>
                </div>
              </div>
              <span className='ml-2'>送信</span>
            </button>
          </form>
        </div>
      </div>
      <div className='w-full text-3xl bg-slate-300 text-center border-t absolute bottom-0'>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
