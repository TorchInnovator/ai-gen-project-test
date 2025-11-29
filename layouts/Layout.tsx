import React from 'react';
import Header from './components/Header';

interface Props {}

const Layout: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      {/* 布局內容 */}
      <main>
        <h1>主題</h1>
        <p>描述</p>
      </main>
    </div>
  );
};

export default Layout;
