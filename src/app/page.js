'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import './index.css'
import LanguageSwitcher from '../../components/LanguageSwitcher';

const DynamicIndexComponent = dynamic(
  () => import('../../components/IndexComponent'),
  { ssr: true }
);

const Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <DynamicIndexComponent />
      <LanguageSwitcher />
    </div>
  );
};

export default Page;