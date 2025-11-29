import React from 'react';

interface Props {}

const BreadcrumbSeparator = () => {
  return (
    <li className="breadcrumb-item active">
      <i className="fas fa-angle-right" />
    </li>
  );
};

export default BreadcrumbSeparator;
