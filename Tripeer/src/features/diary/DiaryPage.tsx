import { Suspense } from 'react';
import DiaryLayout from "./layout/DiaryLayout";
import DiaryHeader from "./components/DiaryBanner"
import ContentLayout from "../../layout/ContentLayout";
import DiaryItem from './components/DiaryItem';
import ErrorBoundary from '../../components/error/ErrorBoundary';
import CommonLoading from '../../components/loading/CommonLoading';

export default function DiaryPage(){
    return(
        <ErrorBoundary fallback={<p>에러발생</p>}>
            <Suspense fallback={<CommonLoading/>}>
                <DiaryLayout>
                    <DiaryHeader/>
                    <ContentLayout>
                        <DiaryItem/>
                    </ContentLayout>
                </DiaryLayout>
            </Suspense>
        </ErrorBoundary>
    )

}