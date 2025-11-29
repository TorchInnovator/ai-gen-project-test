import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Breadcrumb = ({ children }: Props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {children}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
