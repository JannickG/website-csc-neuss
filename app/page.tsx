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

          Jeder von uns bringt eine einzigartige Expertise in den Club ein, sei es im Bereich des nachhaltigen Anbaus, der kreativen Produktentwicklung oder der Gestaltung einladender Räume für soziale Interaktion.<br/> <br/>
          Uns verbindet die Überzeugung, dass Cannabis nicht nur eine Pflanze, sondern auch ein Mittel zur Förderung von Gemeinschaft, Entspannung und Kreativität sein kann.<br/><br/>

          Unser Ziel ist es, eine offene und respektvolle Umgebung zu schaffen, in der sich Mitglieder frei austauschen können, sei es über verschiedene Cannabis-Sorten, Anbautechniken oder persönliche Erfahrungen. Wir legen großen Wert darauf, die regionalen Cannabisgesetze zu respektieren und eine verantwortungsbewusste Nutzung zu fördern.
          <br/><br/>
          Wir freuen uns darauf, diese Reise mit euch allen zu teilen und gemeinsam eine blühende Gemeinschaft im CSC Neuss aufzubauen.
        </p>
      </ContentSection>

      <ContentSection>
        <h1>Häufig gestellte Fragen (FAQ) – CSC Neuss e.V.</h1>

        <h2>1. Was ist ein Anbauverein?</h2>
        <p>
          Ein Anbauverein ist ein eingetragener Verein (e.V.) mit offizieller
          Anbaulizenz der zuständigen Bezirksregierung. Ziel ist der
          gemeinschaftliche, nicht-gewinnorientierte Anbau von Konsum-Cannabis
          für die eigenen Mitglieder.
        </p>

        <h2>2. Was macht der CSC Neuss e.V.?</h2>
        <p>
          Gemeinschaftlicher Anbau von Cannabis in einer professionellen
          Indoor-Anlage. Fokus auf Qualität, Reinheit und verantwortungsvollen
          Umgang.
        </p>

        <h2>3. Hat der CSC Neuss e.V. eine Anbaulizenz?</h2>
        <p>Ja. Seit 2024 staatlich lizenzierter Anbauverein.</p>

        <h2>4. Ab welchem Alter ist eine Mitgliedschaft möglich?</h2>
        <p>Mindestalter: <strong>21 Jahre</strong></p>

        <h2>5. Was kostet die Mitgliedschaft?</h2>
        <div style={{ paddingLeft: '2em' }}>
          <ul>
            <li>Aufnahmegebühr (einmalig): <strong>120 €</strong></li>
            <li>Monatlicher Beitrag: <strong>20 €</strong></li>
          </ul>
        </div>
        <p>Der Monatsbeitrag ist jeweils zum 1. des Monats per Dauerauftrag zu zahlen.</p>

        <h2>6. Wie werde ich Mitglied?</h2>
        <p><strong>Schritt 1 – Registrierung</strong><br />
          Anmeldung über den Registrierungslink.
        </p>
        <p><strong>Schritt 2 – Zahlung</strong><br />
          Überweisung von 120 € Aufnahmegebühr und 20 € erstem Monatsbeitrag.
          Zusätzlich Nachweis über eingerichteten Dauerauftrag einreichen.
        </p>
        <p><strong>Schritt 3 – Bestätigung</strong><br />
          Nach Zahlungseingang und Prüfung erfolgt die offizielle Bestätigung.
        </p>

        <h2>7. Standort</h2>
        <p>
          Neuss-Grimlinghausen (Industriegebiet, Nähe Metro & McDonald’s Norf)
        </p>
        <p>
          CSC Neuss e.V.<br />
          Im Taubental 37<br />
          41468 Neuss
        </p>

        <h2>8. Öffnungszeiten</h2>
        <div style={{ paddingLeft: '2em' }}>
          <ul>
            <li>Montag: 12:00 – 18:00 Uhr</li>
            <li>Dienstag: 12:00 – 18:00 Uhr</li>
            <li>Mittwoch: 12:00 – 18:00 Uhr</li>
            <li>Donnerstag: Geschlossen</li>
            <li>Freitag: 12:00 – 18:00 Uhr</li>
            <li>Samstag: 12:00 – 16:00 Uhr</li>
            <li>Sonntag: Geschlossen</li>
          </ul>
        </div>

        <br/>
        <h2>9. Kontakt</h2>
        <div style={{ paddingLeft: '2em' }}>
          <ul>
            <li>Telefon: 02131-2945556</li>
            <li>
              E-Mail: <a href="mailto:info@cscneuss.com">info@cscneuss.com</a>
            </li>
            <li>
              Webseite: <a href="https://www.cscneuss.com">www.cscneuss.com</a>
            </li>
          </ul>
        </div>

        <br/>
        <h2>10. Versandservice</h2>
        <p>
          Nein. Gemäß Konsumcannabisgesetz (KCanG) ist Versand oder Lieferung
          untersagt. Die Abgabe erfolgt ausschließlich persönlich vor Ort an Mitglieder.
        </p>
      </ContentSection>

      
    </>
  );
};

export default Navigation;
