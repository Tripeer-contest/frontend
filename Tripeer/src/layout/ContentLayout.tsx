import { ReactNode } from 'react';
import styles from "./contentLayout.module.css"

export default function ContentLayout({children}:{children: ReactNode}){
  return(
      <main className={styles.ContentLayout}>
          <aside/>
          <section>{children}</section>
          <aside/>
      </main>
  )
}

