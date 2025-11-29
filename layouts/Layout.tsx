import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';

const Layout = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Features</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Active Item</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Layout;
