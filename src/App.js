import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ListContainer from './components/ListContainer';
import PrivateRoute from './components/PrivateRoute';




const App = () => {
    return (
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/home" element={<PrivateRoute element={HomePage} />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      );
    };

export default App;















// const App = () => {

//     const isAuthenticated = !!localStorage.getItem('user');


//  return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegistrationPage />} />
//           <Route 
//             path="/home" 
//             element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} 
//           />
//           {/* Add other routes here */}
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;










// added routing



// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import ListContainer from './components/ListContainer';

// const App = () => {
//     return (
//         <Provider store={store}>
//             <div>
//                 <h1>Shopping List</h1>
//                 <ListContainer />
//             </div>
//         </Provider>
//     );
// };

// export default App;
















// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ListPage from './pages/ListPage';
// import LoginPage from './pages/LoginPage';
// import Header from './components/Header';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/lists" element={<ListPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
