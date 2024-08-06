import { ReactNode } from "react";
import styles from "../landing.module.css"

export default function LandingLayout({children}:{children:ReactNode}){

    return(
        <div className={styles.container}>
        {children}
        </div>
    )
}