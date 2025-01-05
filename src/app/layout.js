import Header from '../components/home/Header';
import Footer from '../components/common/Footer';
import './globals.css';
import { CurrencyProvider } from '@/contexts/CurrencyContext';

export const metadata = {
  title: 'LinkUp | Connect with global purchasers in one click',
  description: 'Personalized Shopping Made Simple',
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className='bg-paper text-gray-900 font-sans'>
        <CurrencyProvider>
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </CurrencyProvider>
      </body>
    </html>
  );
}
