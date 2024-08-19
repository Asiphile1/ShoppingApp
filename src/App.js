import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ListContainer from './components/ListContainer';

const App = () => {

    const isAuthenticated = !!localStorage.getItem('user');


    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route 
                     path="/home" 
                    element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} 
                />
            </Routes>
      </Router>
    </Provider>
    );
};

export default App;










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
