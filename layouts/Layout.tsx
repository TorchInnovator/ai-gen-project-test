import React from 'react';
import Header from './components/Header';

interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      {/* 布局內容 */}
    </div>
  );
};

export default Layout;
