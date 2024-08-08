import DiarySlide from "./components/DiarySlide";
import FirstSlide from "./components/FirstSlide";
import PhotoSlide from "./components/PhotoSlide";
import SecondSlide from "./components/SecondSlide";
import ThirdSlide from "./components/ThirdSlide";
import LandingLayout from "./layout/LandingLayout";
import LandingScene from "./layout/LandingScene";

export default function LandingPage(){
    return(
        <LandingLayout>
            <LandingScene>
                <FirstSlide />
                <SecondSlide/>
                <ThirdSlide/>
                <DiarySlide/>
                <PhotoSlide/>
            </LandingScene>
        </LandingLayout>
    )
}