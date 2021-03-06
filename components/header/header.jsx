import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default ({ title = 'Deno by Example', subtitle = '' }) => (
  <div className={styles.header}>
    <Link href="/">
      <a className={styles.titleLink}>
        <h1 className={styles.title}>{title}</h1>
      </a>
    </Link>
    {subtitle ? <h2 className={styles.subtitle}>{subtitle}</h2> : null}
  </div>
);
