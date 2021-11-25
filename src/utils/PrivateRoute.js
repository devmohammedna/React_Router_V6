import React from 'react'
import { Navigate } from "react-router";
export default function PrivateRoute({ children, permation, permationShouldBe }) {
       return permationShouldBe.includes(permation) ? children : <Navigate to="401" />;
    
}
