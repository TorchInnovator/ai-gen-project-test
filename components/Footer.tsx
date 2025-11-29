import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({ children }) => {
  return (
    <footer>
      {children}
      {/* 新增的功能 */}
      <p>Copyright 2023</p>
    </footer>
  );
};

export default Footer;
