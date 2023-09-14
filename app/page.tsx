import Contact from '@/app/components/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';
import Header from '@/app/components/Header/Header';
import Main from '@/app/components/Main/Main';
import Overview from '@/app/components/Overview/Overview';
import { TITLE_TEXT } from '@/app/contents';

export default function Home() {
  return (
    <main>
      <Header title={TITLE_TEXT} />
      <Main />
      <Overview />
      <Contact />
      <Footer />
    </main>
  );
}
