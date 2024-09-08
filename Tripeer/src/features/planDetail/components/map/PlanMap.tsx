import { useState } from 'react';
import styles from '../../assets/map/map.module.css';
import PlanShortNav from '../PlanShortNav';
import MapLayout from './layout/MapLayout';

import MapMenu from './mapNav/MapMenu';
import DesktopMap from './mapNav/DesktopMap';
import MobileMap from './mapNav/MobileMap';
import useIsMobileSize from '../../hooks/useIsMobileSize';

export default function PlanMap() {
  const [page, setPage] = useState(0);

  const pageHandler = (page: number) => {
    setPage(page);
  };

  const isMobileSize = useIsMobileSize();

  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanShortNav />
      </aside>
      <section className={styles.contentBox}>
        <MapLayout>
          {isMobileSize ? <MobileMap page={page} /> : <DesktopMap />}
        </MapLayout>
        <MapMenu page={page} pageHandler={pageHandler} />
      </section>
    </main>
  );
}
