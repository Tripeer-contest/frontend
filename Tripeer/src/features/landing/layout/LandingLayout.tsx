import { ReactNode } from "react";
import styles from "../landing.module.css"

interface LandingLayoutProps {
    children: ReactNode;
}

export default function LandingLayout({children}:LandingLayoutProps): JSX.Element {

    return(
        <div className={styles.container}>
        {children}
        </div>
    )
}