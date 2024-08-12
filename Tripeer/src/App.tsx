import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import NotFound from './components/error/NotFound';
import LoginPage from './features/auth/LoginPage';
import zustandStore from './store/store';
import protectRouter from './utils/protectRouter';
import LandingPage from './features/landing/LandingPage';
import PlanPage from './features/plan/PlanPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        // loader: protectRouter(zustandStore),
      },
      {
        path: '/diary',
        element: <p>지난 여행 페이지 컴포넌트</p>,
        loader: protectRouter(zustandStore),
      },
      {
        path: '/home',
        element: <p>여행지 페이지 컴포넌트</p>,
        // loader: protectRouter(zustandStore),
      },
      {
        path: '/cart',
        element: <p>찜 목록 페이지</p>,
        loader: protectRouter(zustandStore),
      },
      {
        path: '/mypage',
        element: <p>마이페이지</p>,
        loader: protectRouter(zustandStore),
      },
      {
        path: '/login',
        element: <LoginPage />,
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
      </QueryClientProvider>
    </>
  );
}

export default App;
