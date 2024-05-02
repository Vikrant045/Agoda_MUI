import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoutes = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/signIn'); // Redirect to signIn page if token doesn't exist
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
