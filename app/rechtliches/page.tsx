import React from 'react';
import shared from '../shared.module.scss';
import styles from './rechtliches.module.scss';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';

export default function RechtlichesIndex() {
  return (

    <>
      <Navbar />

      <ContentSection>
        <h1>
            Rechtliches
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          veritatis, id. Ratione reiciendis iste aliquam eaque, illo culpa
          veniam? Maiores, enim.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </ContentSection>

      
    </>
  );
}
