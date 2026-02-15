import React from 'react';
import shared from '../shared.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

export default function KontaktPage() {
  return (
    <>
    
    <Navbar />

    <ContentSection>
          <h1>Kontakt aufnehmen</h1>  
    </ContentSection>

    <ContentSection>
          <h1>Standort</h1>  
    </ContentSection>
    
    </>
  );
}
