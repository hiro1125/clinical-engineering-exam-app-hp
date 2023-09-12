'use client';
import Footer from '@/app/components/Footer/Footer';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { ComponentProps, useRef, useState } from 'react';
import loadingIcon from '../Images/loading.png';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinished, setFinished] = useState<boolean>(false);

  const sendEmail: ComponentProps<'form'>['onSubmit'] = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const result = await emailjs.sendForm(
        `${process.env.NEXT_PUBLIC_USER_ID}`,
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        event.currentTarget,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`
      );
      console.log('送信できました。', result.status, result.text);
      setFinished(true);
    } catch (error) {
      alert('送信を完了できませんでした。\n通信環境などをお確かめください。');
    }
  };

  return (
    <div className='h-full'>
      <div className='w-full flex flex-col h-screen justify-between items-start'>
        {isFinished ? (
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='lg:text-3xl text-2xl font-bold text-center'>
              送信が完了しました。
            </div>
            <button
              className='mt-5 font-medium text-lg bg-blue-500 text-white py-2 px-4 rounded-full flex items-center transition duration-200 hover:bg-blue-600 active:scale-95'
              onClick={() => {
                window.close();
              }}
            >
              画面を閉じる
            </button>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='lg:text-4xl text-3xl font-bold lg:mt-32 mt-10'>
              お問い合わせ
            </h2>
            <p className='lg:text-3xl text-2xl font-bold justify-center lg:mt-8 lg:m-0 m-6'>
              お問い合わせは、下記フォームよりご記入の上ご連絡ください。
            </p>
            <p className='lg:text-3xl text-2xl font-bold mt-5'>
              <span className='text-red-500'>*</span>
              は、必須事項です。
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='font-bold text-lg lg:m-9 m-5 '
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
                {isLoading ? (
                  <>
                    <div className='svg-wrapper-1'>
                      <div className='svg-wrapper'>
                        <Image
                          src={loadingIcon}
                          alt='回転画像'
                          className='animate-spin h-10 w-10 mx-auto'
                        />
                      </div>
                    </div>
                    <span className='ml-2'>送信中・・・</span>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </button>
            </form>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
