"use client"
import React from 'react';
import shared from './shared.module.scss';
// Using Navbar component
import ImageGallery from '../components/ImageGallery';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

const Navigation: React.FC = () => {

  return (
    <>
      <ImageGallery />
      <Navbar />

      <ContentSection>
        <h1 className={shared.welcome}>
          Herzlich Willkommen beim
          <br />
          CSC NEUSS e.V
          <br />
          dein lizensierter Cannabis Social Club in Neuss!
        </h1>

        <p className={shared.welcome}>
          „Für Freiheit, Gesundheit und Gemeinschaft – Unser Verein setzt sich für eine progressive Cannabispolitik ein!“
        </p>

        <h1 id="sec01">Über Uns</h1>
        <h3><br></br><br></br>Wir, die sieben Gründer des CSC Neuss, möchten uns herzlich bei euch vorstellen und einen Einblick in unsere Vision für diesen einzigartigen Raum geben.<br></br><br></br></h3>
        <p>
          Unsere Gruppe besteht aus passionierten Cannabis-Enthusiasten, die sich zusammengeschlossen haben, um einen Ort zu schaffen, der nicht nur den legalen gemeinschaftlichen Anbau von Cannabis fördert, sondern auch eine Gemeinschaft von Gleichgesinnten vereint.

          Jeder von uns bringt eine einzigartige Expertise in den Club ein, sei es im Bereich des nachhaltigen Anbaus, der kreativen Produktentwicklung oder der Gestaltung einladender Räume für soziale Interaktion. Uns verbindet die Überzeugung, dass Cannabis nicht nur eine Pflanze, sondern auch ein Mittel zur Förderung von Gemeinschaft, Entspannung und Kreativität sein kann.

          Unser Ziel ist es, eine offene und respektvolle Umgebung zu schaffen, in der sich Mitglieder frei austauschen können, sei es über verschiedene Cannabis-Sorten, Anbautechniken oder persönliche Erfahrungen. Wir legen großen Wert darauf, die regionalen Cannabisgesetze zu respektieren und eine verantwortungsbewusste Nutzung zu fördern.

          Wir freuen uns darauf, diese Reise mit euch allen zu teilen und gemeinsam eine blühende Gemeinschaft im CSC Neuss aufzubauen.
        </p>
      </ContentSection>

      <ContentSection>
        <h1 id="sec02">Mitglied werden</h1>
        <p>
          Um Mitglied im CSC NEUSS e.V. zu werden, füllen Sie bitte das Mitgliedschaftsformular auf unserer Website aus. Nach der Überprüfung Ihrer Angaben werden wir uns mit Ihnen in Verbindung setzen, um den Beitrittsprozess abzuschließen. Wir freuen uns darauf, Sie in unserer Gemeinschaft willkommen zu heißen!
        </p>
      </ContentSection>
      
    </>
  );
};

export default Navigation;
