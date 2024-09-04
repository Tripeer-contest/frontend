import { useState } from 'react';
import styles from '../../assets/map/map.module.css';
import PlanShortNav from '../PlanShortNav';
import MapLayout from './layout/MapLayout';
import PlaceMap from './mapNav/PlaceMap';
import SearchPlace from './mapNav/SearchPlace';
import PlaceList from './mapNav/PlaceList';
import MapMenu from './mapNav/MapMenu';

export default function PlanMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState('search');

  const activeComponent = (value: string) => {
    if (value === 'search' && isVisible === true) {
      setIsVisible(false);
    }
    setActive(value);
  };

  const openPlaceList = () => {
    if (active === 'list') {
      setActive('search');
    }
    setIsVisible(!isVisible);
  };

  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanShortNav />
      </aside>
      <section className={styles.contentBox}>
        <MapLayout>
          {active === 'search' && (
            <>
              <div className={styles.noMobile}>
                <SearchPlace
                  isVisible={isVisible}
                  openPlaceList={openPlaceList}
                />
                <PlaceMap />
              </div>
              <div className={styles.mobile}>
                <SearchPlace
                  isVisible={isVisible}
                  openPlaceList={openPlaceList}
                />
              </div>
            </>
          )}
          {active === 'list' && (
            <>
              <div className={styles.noMobile}>
                <SearchPlace
                  isVisible={isVisible}
                  openPlaceList={openPlaceList}
                />
                <PlaceList />
                <PlaceMap />
              </div>
              <div className={styles.mobile}>
                <PlaceList />
              </div>
            </>
          )}
          {active === 'map' && (
            <>
              <div className={styles.noMobile}>
                <SearchPlace
                  isVisible={isVisible}
                  openPlaceList={openPlaceList}
                />
                <PlaceMap />
              </div>
              <div className={styles.mobile}>
                <PlaceMap />
              </div>
            </>
          )}
        </MapLayout>
        <MapMenu active={active} activeComponent={activeComponent} />
      </section>
    </main>
  );
}
