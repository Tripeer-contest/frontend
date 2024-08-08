import DiarySlide from "./components/DiarySlide";
import FirstSlide from "./components/FirstSlide";
import LastSlide from "./components/LastSlide";
import PhotoSlide from "./components/PhotoSlide";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";
import LandingLayout from "./layout/LandingLayout";
import LandingScene from "./layout/LandingScene";
import styles from "./landing.module.css";
import { ReactNode } from "react";

export default function LandingPage(): JSX.Element {
    const slides: ReactNode[] = [
        <FirstSlide key="first" />,
        <SecondSlide key="second" />,
        <ThirdSlide key="third" />,
        <DiarySlide key="diary" />,
        <PhotoSlide key="photo" />,
        <LastSlide key="last" />
    ];

    return(
        <LandingLayout>
            <LandingScene>
            {slides.map((slide, index) => (
                    <div key={index} className={styles.landingSlide}>{slide}</div>
                ))}
            </LandingScene>
        </LandingLayout>
    )
}