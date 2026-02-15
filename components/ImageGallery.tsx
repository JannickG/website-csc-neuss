"use client"
import React from 'react';
import shared from '../app/shared.module.scss';
import styles from './imageGallery.module.scss';

const ImageGallery: React.FC = () => {
  return (
    <section className={`${shared.logoSection} ${styles.gallery}`} aria-label="Image gallery">
      <div className={`${shared.heroPlaceholder} ${styles.placeholder}`}>
        Image Gallery Platzhalter
      </div>
      <p className={styles.caption}>BLABLUBBLIB</p>
    </section>
  );
};

export default ImageGallery;
