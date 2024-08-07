import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import NotFound from './components/error/NotFound';
import LoginPage from './features/auth/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <p>메인 페이지 컴포넌트</p> },
      { path: '/plan', element: <p>일정 계획 페이지 컴포넌트</p> },
      { path: '/diary', element: <p>지난 여행 페이지 컴포넌트</p> },
      { path: '/place', element: <p>여행지 페이지 컴포넌트</p> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
