import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="h-full flex-1 bg-slate-950 text-white">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
