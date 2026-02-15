"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import styles from './mitglied.module.scss';

export default function MitgliedPage() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://account.cannanas.club/static/frame.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const cannanasDiv = document.getElementById('cannanas');
    if (cannanasDiv) {
      cannanasDiv.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://account.cannanas.club/static/frame.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Cannanas script loaded');
    };
    
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <Navbar />
      <ContentSection>
        <h1>Mitglied Werden</h1>
        <p>
          Werden Sie Teil unserer Gemeinschaft! Füllen Sie das Formular aus, um
          Ihre Mitgliedschaft im CSC Neuss e.V. zu beantragen.
        </p>

        <div className={styles.embedContainer}>
          <div
            id="cannanas"
            data-key="Vd64CMaP6Id-qjIBG0pqURPsL5K4P9Pv"
          />
          {!scriptLoaded && (
            <div className={styles.loading}>
              Formular wird geladen...
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}