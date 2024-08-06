import FirstSlide from "./components/FirstSlide";
import LandingLayout from "./layout/LandingLayout";
import LandingScene from "./layout/LandingScene";

export default function LandingPage(){
    return(
        <LandingLayout>
            <LandingScene>
                <FirstSlide />
            </LandingScene>
        </LandingLayout>
    )
}