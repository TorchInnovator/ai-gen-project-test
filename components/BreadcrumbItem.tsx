import React from 'react';

interface Props {
  children: React.ReactNode;
}

const BreadcrumbItem = ({ children }: Props) => {
  return (
    <li className="breadcrumb-item">
      {children}
    </li>
  );
};

export default BreadcrumbItem;
