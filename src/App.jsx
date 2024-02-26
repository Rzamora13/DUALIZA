import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import RootPage from './components/pages/RootPage'
import ErrorPage from './components/pages/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/utils/ProtectedRoute'
import Proyecto from './components/pages/Proyecto'
import Resultados from './components/pages/Resultados'
import Mejorar from './components/pages/Mejorar'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,

      children: [
        {
          element: <ProtectedRoute />,
          children: [
            { path: "/", element: <Proyecto /> },
            { path: "resultados", element: <Resultados /> },
            { path: "mejorar", element: <Mejorar /> },
            { path: "about", element: <About /> },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
