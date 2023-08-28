import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import Main from '@/app/components/Main/Main';
import Overview from '@/app/components/Overview/Overview';

export default function Home() {
  return (
    <main>
      <Header title={'臨床工学技士国家試験'} />
      <Main />
      <Overview />
      <Footer />
    </main>
  );
}
