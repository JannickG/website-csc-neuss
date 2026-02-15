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
        <h1>Datenschutz</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          beatae. Error voluptatem, inventore atque deserunt, facilis
          exercitationem architecto perferendis.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
    </ContentSection>
    </>
  );
}
