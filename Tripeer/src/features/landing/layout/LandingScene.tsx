import { ReactNode } from "react";
import styles from "../landing.module.css"

interface LandingSceneProps {
    children: ReactNode;
}

export default function LandingScene({children}: LandingSceneProps): JSX.Element {
    return(
        <div className={styles.outer}>
                {children}
        </div>
    )
}