import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import Booking from './components/Booking/Booking.jsx';
import PrivateRoutes from './components/routes/PrivateRoute/PrivateRoutes.jsx';
import ResetPassword from './components/ResetPassword/ResetPassword.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch("data.json")
        }
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "booking",
        element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
      },
      {
        path: "profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "reset_password",
        element: <ResetPassword></ResetPassword>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
