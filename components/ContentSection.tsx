"use client";

import React from "react";
import shared from "../app/shared.module.scss";
import styles from "./contentSection.module.scss";

const ContentSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      <div className={`${shared.container} ${styles.card}`}>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
