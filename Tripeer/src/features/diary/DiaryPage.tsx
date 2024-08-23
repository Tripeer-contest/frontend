import DiaryLayout from "./layout/DiaryLayout";
import DiaryBanner from "./components/DiaryBanner"
import ContentLayout from "../../layout/ContentLayout";
import DiaryContent from "./components/DiaryContent";


export default function DiaryPage(){
    return(
        <DiaryLayout>
            <DiaryBanner/>
            <ContentLayout>
                <DiaryContent/>
            </ContentLayout>
        </DiaryLayout>
    )

}