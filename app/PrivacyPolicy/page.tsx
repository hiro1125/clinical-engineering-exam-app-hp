import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <Link href={'/'}>
        <Header title={'臨床工学技士国家試験'} />
      </Link>
      <div className='lg:p-4 lg:m-40 m-10 h-5/6'>
        <h1 className='text-3xl font-semibold lg:mb-8 text-center mt-32'>
          プライバシーポリシー
        </h1>
        <p className='lg:text-center m-2'>
          このプライバシーポリシーは、臨床工学技士国家試験のクイズアプリ（以下、「アプリ」と称します）の利用に関する情報収集、使用、保護について説明します。
          <br />
          アプリを利用することで、以下の内容に同意したものとみなされます。したがって、プライバシーポリシーをよくお読みいただき、理解していただけることをお勧めします。
        </p>
        <div className='lg:mx-80 lg:my-20 lg:p-14 p-5'>
          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>1. 収集する情報</h2>
            <p className='mb-2'>
              1.1 個人情報の提供:
              アプリの利用に際し、ユーザーから個人情報（名前、メールアドレスなど）の提供は一切必要ありません。アプリは個人情報を収集しません。
            </p>
            <p className='mb-2'>
              1.2 利用状況データ:
              アプリの利用状況に関するデータ（クイズの正答率、履歴、進捗など）を収集し、アプリの機能向上やユーザーエクスペリエンスの改善に利用します。
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>2. 情報の使用</h2>
            <p className='mb-2'>
              2.1 匿名データの使用:
              アプリは、ユーザーの利用状況に関するデータ（クイズの正答率、履歴、進捗など）を収集し、アプリの機能向上やユーザーエクスペリエンスの改善に利用する可能性があります。ただし、具体的なデータがどのように収集されるかについては詳細な情報が提供できない場合があります。
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>3. セキュリティ</h2>
            <p className='mb-2'>
              3.1 データの保護:
              ユーザーの個人情報が収集されないため、セキュリティ対策についての心配はありません。
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>4. 外部リンク</h2>
            <p className='mb-2'>
              アプリ内で提供される外部リンクを通じてアクセスされるウェブサイトやサービスについては、当アプリのプライバシーポリシーは適用されません。それらのサイトやサービスのプライバシーポリシーをご確認ください。
            </p>
          </section>
          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>5. 変更と通知</h2>
            <p className='mb-2'>
              このプライバシーポリシーは予告なしに変更されることがあります。変更が行われた場合、新しいプライバシーポリシーが有効になります。
            </p>
          </section>

          <section className='mb-6'>
            <h2 className='text-xl font-semibold mb-2'>6. お問い合わせ</h2>
            <p className='mb-2'>お問い合わせ: hisa.contactform@gmail.com</p>
          </section>
          <p className='mt-4'>
            このプライバシーポリシーを読んでいただき、アプリの利用に同意していただけることを願っています。アプリの利用にあたり、プライバシーに関する疑問や懸念がある場合は、お気軽にお問い合わせください。
          </p>
          <p className=' mt-8 mb-2'>作成日: 2023年9月13日</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
