import React from 'react';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import ContactForm from '@/components/ContactForm';
import styles from './kontakt.module.scss';

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <ContentSection>
        <h1>Kontakt aufnehmen</h1>
        <p>
          Haben Sie Fragen oder möchten Sie mehr über unseren Verein erfahren?
          Füllen Sie einfach das untenstehende Formular aus, und wir melden uns
          schnellstmöglich bei Ihnen.
        </p>
        <ContactForm />
      </ContentSection>
      <ContentSection>
        <h1>Standort</h1>
        <p>
          <strong>CSC Neuss e.V.</strong><br />
          Im Taubental 37<br />
          41468 Neuss
        </p>
        <p>
          <strong>Telefon:</strong> (+49) 02131 2945556<br />
          <strong>Mobil:</strong> (+49) 01556 2939252<br />
          <strong>E-Mail:</strong> info@cscneuss.com
        </p>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.7234567890123!2d6.6947!3d51.1978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8a9e6c9f4b5a1%3A0x1234567890abcdef!2sIm%20Taubental%2037%2C%2041468%20Neuss!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="CSC Neuss e.V. Standort"
          />
        </div>
      </ContentSection>
    </>
  );
}