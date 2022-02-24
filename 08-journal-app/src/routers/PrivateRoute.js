import React from 'react';
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, isAutenticated }) => {


  return (
      ( isAutenticated )? children : <Navigate to="/auth/login" />
    )
}
