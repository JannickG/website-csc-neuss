import React from 'react';
import shared from '../../shared.module.scss';
import styles from '../rechtliches.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

export default function ImpressumPage() {
  return (
    <>
    <Navbar />
    <ContentSection>
        <h1>Rechtliche Hinweise</h1>
        <br/>
        <p>
          CSC Neuss e.V.<br/>
          Im Taubental 37<br/>  
          41468 Neuss
        </p>
    </ContentSection>
    <ContentSection>
        <p>
          <strong>Vertreten durch:</strong><br/>
          Vu Nguyen (Vorstand)
        </p>
        <p>
          <strong>Kontakt:</strong><br/>
          <strong>Telefon:</strong> (+49) 02131 2945556<br/>
          <strong>Mobil:</strong> (+49) 01556 2939252<br/>
          <strong>E-Mail:</strong> info@cscneuss.com
        </p>
        <p>
            <b>Registergericht:</b> Amtsgericht Neuss<br/>
            <b>Registernummer:</b> VR 3178
        </p>
        <p>
            <b>Finanzamt:</b> FA Neuss<br/>
            <b>Umsatzsteuer-ID:</b> DE369304376
        </p>
        <p>
            <b>Bankverbindung:</b><br/>
            VR Bank eG Monheim<br/>
            <b>IBAN:</b> DE26 3056 0548 3234 0450 15<br/>
            <b>BIC:</b> GENODED1NLD
        </p>
    </ContentSection>
    <ContentSection>
      <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:</h2>
      <p>Vu Nguyen<br/>(Im Taubental 37, 41468 Neuss)</p>
      <ol>
        <li><b>Datenschutzerklärung</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Zusammenhang mit der Nutzung unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).
          </div>
        </li>
        <li><b>Verantwortlicher</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Verantwortlich für die Datenverarbeitung ist:<br/>
            CSC Neuss e.V.<br/>
            Im Taubental 37<br/>
            41468 Neuss<br/>
            E-Mail: info@cscneuss.com
          </div>
        </li>
        <li><b>Arten der erhobenen Daten</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Wir erheben und verarbeiten folgende personenbezogene Daten:
            <ul>
              <li><b>Kontaktinformationen:</b> Name, E-Mail-Adresse, Telefonnummer</li>
              <li><b>Nutzungsdaten:</b> IP-Adresse, Browserinformationen, Zugriffszeiten</li>
              <li><b>Daten aus Online-Formularen:</b> Inhalte von Kontaktanfragen, Mitgliedsanträgen oder Veranstaltungsanmeldungen</li>
            </ul>
          </div>
        </li>
        <li><b>Verarbeitungszwecke</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Ihre Daten werden zu folgenden Zwecken verarbeitet:
            <ul>
              <li>Bearbeitung Ihrer Anfragen und Kommunikation</li>
              <li>Verwaltung von Vereinsmitgliedschaften</li>
              <li>Organisation und Durchführung von Veranstaltungen</li>
              <li>Analyse und Optimierung der Website</li>
            </ul>
          </div>
        </li>
        <li><b>Rechtsgrundlagen</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Die Datenverarbeitung erfolgt auf Basis folgender Rechtsgrundlagen:
            <ul>
              <li>Art. 6 Abs. 1 lit. b DSGVO: Erfüllung eines Vertrags (z. B. Mitgliedschaft)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO: Berechtigtes Interesse (Optimierung der Website)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO: Einwilligung (z. B. Newsletter)</li>
            </ul>
          </div>
        </li>
        <li><b>Rechte der betroffenen Personen</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Sie haben das Recht auf:
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten, sofern keine rechtlichen Pflichten entgegenstehen (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung Ihrer Daten (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an info@cscneuss.com.
          </div>
        </li>
        <li><b>Weitergabe von Daten an Dritte</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Ihre Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben, es sei denn, dies ist zur Vertragserfüllung erforderlich (z. B. Zahlungsdienstleister, Hosting-Anbieter).
          </div>
        </li>
        <li><b>Speicherdauer</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Ihre Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder wir gesetzlich dazu verpflichtet sind.
          </div>
        </li>
        <li><b>Cookies und Tracking</b><br/>
          <div style={{ paddingLeft: '2em' }}>
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und statistische Auswertungen zu ermöglichen.
            <ul>
              <li><b>Erforderliche Cookies:</b> Notwendig für die technische Funktionalität der Website.</li>
              <li><b>Optionale Cookies:</b> Ermöglichen uns die Analyse des Nutzerverhaltens (z. B. Google Analytics).</li>
            </ul>
            Sie können der Verwendung von optionalen Cookies jederzeit widersprechen. Weitere Informationen finden Sie in unserer <Link href="/rechtliches/datenschutz">Cookie-Richtlinie</Link>.
          </div>
        </li>
      </ol>
      <br/>
      <h2>Haftungsausschluss</h2>
       <ol>
        <li><b>Haftung für Inhalte</b><br/>
        <div style={{ paddingLeft: '2em' }}>
          Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte.
        </div>
        </li>
        <li><b>Haftung für Links</b><br/>
        <div style={{ paddingLeft: '2em' }}>
        Unsere Website enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen Einfluss und übernehmen daher keine Verantwortung. Sollten Rechtsverletzungen bekannt werden, werden wir derartige Links umgehend entfernen.
        </div>
        </li>
        <li><b>Urheberrecht</b><br/>
        <div style={{ paddingLeft: '2em' }}>
        Die auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken) sind urheberrechtlich geschützt. Eine Vervielfältigung oder Verbreitung ist ohne schriftliche Genehmigung des CSC Neuss e.V. nicht gestattet.
        </div>
        </li>
         </ol>
      <br/>
         <h2>Widerrufsbelehrung (bei Mitgliedschaften)</h2>
          <p>Falls der CSC Neuss e.V. online Mitgliedsanträge anbietet:</p>
        <b>Widerrufsrecht</b><br/>
        <div style={{ paddingLeft: '2em' }}>
        Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen Ihren Mitgliedschaftsantrag zu widerrufen.<br/>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (CSC Neuss e.V., Im Taubental 37, 41468 Neuss, E-Mail: info@cscneuss.com) mittels einer eindeutigen Erklärung (z. B. per E-Mail oder Brief) über Ihren Entschluss informieren.<br/>
        </div>
        <b>Widerrufsfrist:</b><br/> 
        <div style={{ paddingLeft: '2em' }}>
        Die Widerrufsfrist beträgt 14 Tage ab dem Tag der Abgabe Ihres Antrags.<br/>
        </div>
        <b>Folgen des Widerrufs:</b><br/>
        <div style={{ paddingLeft: '2em' }}>
          Im Falle eines Widerrufs erstatten wir Ihnen alle geleisteten Zahlungen unverzüglich, spätestens jedoch binnen 14 Tagen nach Eingang der Widerrufserklärung.
        </div>
        <br/>
        <h2>Barrierefreiheitserklärung</h2>
        <p>Wir sind bemüht, unsere Website barrierefrei gemäß den gesetzlichen Anforderungen zu gestalten. Sollten Ihnen Barrieren auffallen, kontaktieren Sie uns bitte unter info@cscneuss.com.</p>
    </ContentSection>
    </>
  );
}
