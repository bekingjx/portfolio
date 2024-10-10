import './globals.css';
import Menu from './components/Menu';
import ThemeToggle from './components/ThemeToggle';
import ContactIcon from './components/ContactIcon';

export const metadata = {
  title: 'LORCAV - Portfolio',
  description: 'Portfolio personale di Lorenzo Cavicchioli',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-white dark:bg-[#141414] text-[color:var(--color-1)] dark:text-white">
        <div className="flex flex-col min-h-screen">
          <main className="container flex-grow">{children}</main>
          <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
            <ThemeToggle />
            <Menu />
            <ContactIcon />
          </div>
        </div>
      </body>
    </html>
  );
}
