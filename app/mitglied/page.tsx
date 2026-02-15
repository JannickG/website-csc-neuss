import React from 'react';
import shared from '../shared.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

export default function MitgliedPage() {
  return (
    <><Navbar /><ContentSection>
          <h1>Mitglied Werden</h1>  
      </ContentSection></>
  );
}
