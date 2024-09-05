import { useState } from 'react';
import styles from '../../assets/map/map.module.css';
import PlanShortNav from '../PlanShortNav';
import MapLayout from './layout/MapLayout';

import MapMenu from './mapNav/MapMenu';
import DesktopMap from './mapNav/DesktopMap';
import MobileMap from './mapNav/MobileMap';

export default function PlanMap() {
  const [page, setPage] = useState(0);

  const pageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanShortNav />
      </aside>
      <section className={styles.contentBox}>
        <MapLayout>
          <DesktopMap />
          <MobileMap page={page} />
        </MapLayout>
        <MapMenu page={page} pageHandler={pageHandler} />
      </section>
    </main>
  );
}
