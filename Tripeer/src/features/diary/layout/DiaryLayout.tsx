// 내부 모듈
import styles from "../diary.module.css"

// 외부 모듈
import { ReactNode } from 'react';

export default function DiaryLayout({ children }: { children: ReactNode }){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}