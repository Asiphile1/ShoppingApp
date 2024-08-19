import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element: Component }) => {
    const { isAuthenticated } = useAuth();
    // console.log("Is Authenticated:", isAuthenticated);
  
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

export default PrivateRoute;










// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';


// const PrivateRoute = ({ element, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? element : <Navigate to="/login" />}
//     />
//   );
// };

// export default PrivateRoute;

