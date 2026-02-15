import React from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import styles from './mitglied.module.scss';

export default function MitgliedPage() {
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
        </div>
      </ContentSection>

      <Script
        src="https://account.cannanas.club/static/frame.js"
        strategy="lazyOnload"
        defer
      />
    </>
  );
}