'use client';
import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import testSelection from '../../Images/OverviewShow/test-selection-screen.jpg';
import sectorSpecific from '../../Images/OverviewShow/sector-specific-screen.jpg';
import problemStart from '../../Images/OverviewShow/problem-start-screen.jpg';
import problemScreen from '../../Images/OverviewShow/problem-screen.jpg';
import correct from '../../Images/OverviewShow/correct-screen.jpg';
import incorrect from '../../Images/OverviewShow/incorrect-screen.jpg';
import confirmation from '../../Images/OverviewShow/confirmation-screen.jpg';
import setup from '../../Images/OverviewShow/setup-screen.jpg';
import problemNumber from '../../Images/OverviewShow/problem-number-setting-screen.jpg';
import time from '../../Images/OverviewShow/time-setting-screen.jpg';
import sound from '../../Images/OverviewShow/sound-setting-screen.jpg';
import Image from 'next/image';

const Overview = () => {
  const slideOptions = {
    type: 'loop',
    height: '100%',
    pagination: false,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    resetProgress: false,
    updateOnMove: true,
    perPage: 4,
    perMove: 1,
  };

  const IMAGE_LIST = [
    {
      src: testSelection,
      alt: '試験選択画面',
    },
    {
      src: sectorSpecific,
      alt: '分野別画面',
    },
    {
      src: problemStart,
      alt: 'スタート画面',
    },
    {
      src: problemScreen,
      alt: '問題画面',
    },
    {
      src: correct,
      alt: '正解画面',
    },
    {
      src: incorrect,
      alt: '不正解画面',
    },
    {
      src: confirmation,
      alt: '確認画面',
    },
    {
      src: setup,
      alt: '設定画面',
    },
    {
      src: problemNumber,
      alt: '問題数設定画面',
    },
    {
      src: time,
      alt: '制限時間設定画面',
    },
    {
      src: sound,
      alt: '効果音設定画面画面',
    },
  ];

  return (
    <div className='w-full h-full'>
      <div className='lg:w-1/2 lg:flex flex-col lg:ml-60 lg:mb-10 lg:mt-0 mt-5 lg:text-left text-center'>
        <p className='lg:text-7xl text-5xl font-semibold mb-4'>主な画面</p>
        <p className='lg:text-3xl text-xl lg:mb-0 mb-4'>
          主要機能を画面で直接ご覧ください。
        </p>
      </div>
      <Splide hasTrack={false} aria-label='...' options={slideOptions}>
        <SplideTrack className='flex items-center'>
          {IMAGE_LIST.map((item, index) => {
            return (
              <SplideSlide key={index} className='flex justify-center'>
                <Image
                  src={item.src}
                  alt={`${item.alt}の画像`}
                  className='lg:w-1/2 w-11/12'
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div className='splide__arrows'></div>
      </Splide>
    </div>
  );
};

export default Overview;
