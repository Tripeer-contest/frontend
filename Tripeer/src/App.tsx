import RootLayout from './layout/RootLayout';
import NotFound from './components/error/NotFound';
import LoginPage from './features/auth/LoginPage';
import protectRouter from './utils/protectRouter';
import LandingPage from './features/landing/LandingPage';
import PlanPage from './features/plan/PlanPage';
import DiaryPage from './features/diary/DiaryPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminLoginPage from './features/admin/AdminLoginPage.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
        path: '/diary',
        element: <DiaryPage />,
        loader: protectRouter(),
      },
      {
        path: '/home',
        element: <p>여행지 페이지 컴포넌트</p>,
        // loader: protectRouter(),
      },
      {
        path: '/cart',
        element: <p>찜 목록 페이지</p>,
        loader: protectRouter(),
      },
      {
        path: '/mypage',
        element: <p>마이페이지</p>,
        loader: protectRouter(),
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/admin',
        element: <AdminLoginPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
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
