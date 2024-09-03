import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import RootLayout from './layout/RootLayout';
import NotFound from './components/error/NotFound';
import protectRouter from './utils/protectRouter';
import LandingPage from './features/landing/LandingPage';
import PlanPage from './features/plan/PlanPage';
import PlanDetail from './features/planDetail/PlanDetail';
import DiaryPage from './features/diary/DiaryPage';
import AdminLoginPage from './features/admin/AdminLoginPage.tsx';
import RegisterPage from './features/register/RegisterPage.tsx';
import RedirectPage from './features/redirect/RedirectPage.tsx';
import CartPage from './features/cart/CartPage';
import CommonLoading from './components/loading/CommonLoading.tsx';
import HomePage from './features/home/HomePage.tsx';
import ImgPage from './features/img/ImgPage';
import useViewport from './hooks/useViewport.tsx';
import SpotPage from './features/spot/SpotPage.tsx';
import DiaryDetailPage from './features/diaryDetail/DiaryDetailPage.tsx';
import ErrorPage from './components/error/ErrorPage.tsx';
import ErrorBoundary from './components/error/ErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: '/plan',
        element: <PlanPage />,
        // loader: protectRouter(),
      },
      {
        path: '/plan/detail/:id',
        element: <PlanDetail />,
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
        // loader: protectRouter(),
      },
      {
        path: '/diary/detail/:id',
        element: (
          <Suspense fallback={<CommonLoading />}>
            <DiaryDetailPage />,
          </Suspense>
        ),
      },
      {
        path: '/home',
        element: <HomePage />,
        // loader: protectRouter(),
      },
      {
        path: '/home/spot/:id',
        element: <SpotPage />,
        // loader: protectRouter(),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<CommonLoading />}>
            <CartPage />
          </Suspense>
        ),
        // loader: protectRouter(),
      },
      {
        path: '/mypage',
        element: <p>마이페이지</p>,
        loader: protectRouter(),
      },
      {
        path: '/error',
        element: <ErrorPage />,
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
    element: <AdminLoginPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <NotFound />,
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
