import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy, Suspense } from 'react';
import RootLayout from './layout/RootLayout';
import NotFound from './components/error/NotFound';
import protectRouter from './utils/protectRouter';
import LandingPage from './features/landing/LandingPage';
import RegisterPage from './features/register/RegisterPage.tsx';
import RedirectPage from './features/redirect/RedirectPage.tsx';
import CommonLoading from './components/loading/CommonLoading.tsx';
import ImgPage from './features/img/ImgPage';
import useViewport from './hooks/useViewport.tsx';
import ErrorPage from './components/error/ErrorPage.tsx';
import ErrorBoundary from './components/error/ErrorBoundary.tsx';
import AboutPage from './features/about/AboutPage.tsx';

const PlanPage = lazy(() => import('./features/plan/PlanPage.tsx'));
const PlanDetail = lazy(() => import('./features/planDetail/PlanDetail.tsx'));
const DiaryPage = lazy(() => import('./features/diary/DiaryPage.tsx'));
const DiaryDetailPage = lazy(
  () => import('./features/diaryDetail/DiaryDetailPage.tsx'),
);
const HomePage = lazy(() => import('./features/home/HomePage.tsx'));
const HomeRecommendPage = lazy(
  () => import('./features/home/components/HomeRecommendPage.tsx'),
);
const SpotPage = lazy(() => import('./features/spot/SpotPage.tsx'));
const MyPage = lazy(() => import('./features/mypage/MyPage.tsx'));
const MyConfig = lazy(() => import('./features/mypage/MyConfig.tsx'));
const MyNotice = lazy(() => import('./features/mypage/MyNotice.tsx'));
const CreateReview = lazy(
  () => import('./features/spot/components/CreateReview.tsx'),
);
const CartPage = lazy(() => import('./features/cart/CartPage.tsx'));
const BannerPage = lazy(() => import('./components/empty/BannerPage.tsx'));
const AdminLoginPage = lazy(
  () => import('./features/admin/AdminLoginPage.tsx'),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: '/plan',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <PlanPage />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/plan/detail/:id',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <PlanDetail />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: '/diary',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <DiaryPage />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/diary/detail/:id',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <DiaryDetailPage />,
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: '/home',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <HomePage />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/home/recommend/:cityId/:townId/:keyword',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <HomeRecommendPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: '/home/spot/:id',
        children: [
          {
            index: true,
            element: (
              <ErrorBoundary fallback={<ErrorPage />}>
                <Suspense fallback={<CommonLoading />}>
                  <SpotPage />
                </Suspense>
              </ErrorBoundary>
            ),
          },
          {
            path: 'createReview',
            element: (
              <ErrorBoundary fallback={<ErrorPage />}>
                <Suspense fallback={<CommonLoading />}>
                  <CreateReview />
                </Suspense>
              </ErrorBoundary>
            ),
          },
        ],
        loader: protectRouter(),
      },
      {
        path: '/home/spot/:id/createReview',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <CreateReview />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/cart',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <CartPage />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/banner/:idx',
        element: (
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<CommonLoading />}>
              <BannerPage />
            </Suspense>
          </ErrorBoundary>
        ),
        loader: protectRouter(),
      },
      {
        path: '/mypage',
        children: [
          {
            index: true,
            element: (
              <ErrorBoundary fallback={<ErrorPage />}>
                <Suspense fallback={<CommonLoading />}>
                  <MyPage />
                </Suspense>
              </ErrorBoundary>
            ),
          },
          {
            path: 'edit',
            element: (
              <ErrorBoundary fallback={<ErrorPage />}>
                <Suspense fallback={<CommonLoading />}>
                  <MyConfig />
                </Suspense>
              </ErrorBoundary>
            ),
          },
          {
            path: 'notice',
            element: (
              <ErrorBoundary fallback={<ErrorPage />}>
                <Suspense fallback={<CommonLoading />}>
                  <MyNotice />
                </Suspense>
              </ErrorBoundary>
            ),
          },
        ],
        loader: protectRouter(),
      },
    ],
  },
  {
    path: 'redirect',
    element: <RedirectPage />,
  },
  {
    path: '/img/compress',
    element: <ImgPage />,
  },
  {
    path: '/admin',
    element: (
      <ErrorBoundary fallback={<NotFound />}>
        <Suspense fallback={<CommonLoading />}>
          <AdminLoginPage />,
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/register',
    element: (
      <ErrorBoundary fallback={<NotFound />}>
        <Suspense fallback={<CommonLoading />}>
          <RegisterPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  useViewport();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
