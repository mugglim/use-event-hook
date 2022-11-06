import React from 'react';
import { Roboto } from '@next/font/google';
import Header from '@components/Header';

const roboto = Roboto({
  weight: '400',
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={roboto.className}>
      <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
        <div style={{ border: '1px solid #eee', padding: 5, minWidth: 200 }}>
          <Header />
        </div>

        <div style={{ padding: '1rem 2rem' }}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
