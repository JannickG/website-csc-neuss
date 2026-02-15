import React from 'react';
import shared from '../../shared.module.scss';
import styles from '../rechtliches.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

export default function DatenschutzPage() {
  return (

    <>
    <Navbar />
    <ContentSection>
      <h1>Datenschutzerklärung</h1>
      <p><strong>Datenschutzerklärung für www.cscneuss.com</strong></p>
      <p><strong>Letzte Aktualisierung:</strong> 01.12.2023</p>

      <p>
        Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer
        Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
        ausführlich über den Umgang mit Ihren Daten.
      </p>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
        EU-Datenschutzgrundverordnung (DSGVO), ist:
      </p>
      <p>
        Der Vorstand<br />
        E-Mail: <a href="mailto:info@cscneuss.com">info@cscneuss.com</a>
      </p>

      <h2>2. Erfassung und Verarbeitung Ihrer Daten</h2>

      <h3>a) Beim Besuch der Webseite</h3>
      <p>
        Beim Aufrufen unserer Webseite werden durch den auf Ihrem Endgerät zum
        Einsatz kommenden Browser automatisch Informationen an den Server unserer
        Webseite gesendet. Diese Informationen werden temporär in einem sogenannten
        Logfile gespeichert.
      </p>

      <p>Folgende Informationen werden dabei erfasst:</p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Referrer-URL</li>
        <li>Browser, Betriebssystem und Access-Provider</li>
      </ul>
      <br/>
      <p>Die Verarbeitung erfolgt zur:</p>
      <ul>
        <li>Sicherstellung eines reibungslosen Verbindungsaufbaus</li>
        <li>Komfortablen Nutzung der Webseite</li>
        <li>Systemstabilität und -sicherheit</li>
        <li>Administrativen Zwecken</li>
      </ul>

      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Eine personenbezogene
        Auswertung findet nicht statt.
      </p>

      <h3>b) Nutzung des Kontaktformulars</h3>
      <p>
        Bei Nutzung unseres Formulars ist die Angabe einer gültigen E-Mail-Adresse
        erforderlich. Weitere Angaben sind freiwillig.
      </p>
      <p>
        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
      </p>

      <h2>3. Weitergabe von Daten</h2>
      <p>Eine Weitergabe erfolgt nur, wenn:</p>
      <ul>
        <li>Sie ausdrücklich eingewilligt haben</li>
        <li>Eine gesetzliche Verpflichtung besteht</li>
        <li>Es zur Vertragsabwicklung erforderlich ist</li>
        <li>Es zur Rechtsdurchsetzung notwendig ist</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Unsere Webseite verwendet Cookies. Diese speichern Informationen auf Ihrem
        Endgerät und dienen der Verbesserung der Benutzerfreundlichkeit.
      </p>
      <p>
        Session-Cookies werden automatisch gelöscht, sobald Sie die Seite
        verlassen.
      </p>

      <h2>5. Ihre Rechte</h2>
      <ul>
        <li>Auskunft gemäß Art. 15 DSGVO</li>
        <li>Berichtigung gemäß Art. 16 DSGVO</li>
        <li>Löschung oder Einschränkung der Verarbeitung</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>
      <br/>
      <h2>6. Änderung der Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Erklärung bei Bedarf anzupassen.
      </p>

    </ContentSection>

    <ContentSection>
      <h1>Einwilligung zur Datenverarbeitung</h1>
      <h2>für die Teilnahme an unserer Umfrage</h2>

      <p>
        Vor der Teilnahme informieren wir Sie über die Verarbeitung Ihrer Daten.
      </p>

      <h3>1. Verantwortlicher</h3>
      <p>
        Vorstand des CSC NEUSS<br />
        E-Mail: <a href="mailto:info@cscneuss.com">info@cscneuss.com</a>
      </p>

      <h3>2. Zweck</h3>
      <p>Analyse und Verbesserung des Vereins.</p>

      <h3>3. Umfang</h3>
      <p>Persönliche und nicht-persönliche Daten können verarbeitet werden.</p>

      <h3>4. Rechtsgrundlage</h3>
      <p>Art. 6 Abs. 1 lit. a DSGVO (freiwillige Einwilligung).</p>

      <h3>5. Speicherfrist</h3>
      <p>
        Speicherung nur für Dauer der Umfrage und Analyse, danach Löschung.
      </p>

      <h3>6. Freiwilligkeit</h3>
      <p>
        Die Teilnahme ist freiwillig und kann jederzeit beendet werden.
      </p>

      <h3>Einwilligung</h3>
      <p>
        Durch Klicken auf „Absenden“ stimmen Sie der Verarbeitung Ihrer Daten zu.
      </p>
    </ContentSection>

    </>
  );
}
