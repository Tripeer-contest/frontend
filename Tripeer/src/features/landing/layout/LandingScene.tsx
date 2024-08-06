import { ReactNode } from "react";
import styles from "../landing.module.css"

export default function LandingScene({children}: {children: ReactNode}){
    return(
        <div className={styles.scene}>
            {children}
        </div>
    )
}