import React from 'react';
import shared from '../shared.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Content } from 'next/font/google';
import ContentSection from '@/components/ContentSection';

export default function InfoPage() {
  return (
    
        <><Navbar /><ContentSection>
          <h1>Info</h1>
          <p>Info über den Club</p>
      </ContentSection></>
  );
}
