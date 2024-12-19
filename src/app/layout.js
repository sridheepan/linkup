import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import Menu from '@/components/Menu';

export const metadata = {
  title: 'LinkUp | Connect with global purchasers in one click',
  description: 'Personalized Shopping Made Simple',
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className='bg-paper text-gray-900'>
        <Header />
        <main className='p-6'>{children}</main>
        {/* <Footer /> */}
        {/* <Menu /> */}
      </body>
    </html>
  );
}
