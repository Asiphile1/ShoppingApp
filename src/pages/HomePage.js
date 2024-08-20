// import React from 'react';
import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ListContainer from '../components/ListContainer';
import ListForm from '../components/ListForm';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="homepage">
//       <h2>All Lists</h2>
//       <SearchBar />
//       <ListContainer />
//       <ListForm />
//     </div>
//   );
// };

// export default HomePage;




const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    // Logic to handle logout
  };

  return (
    <div className="homepage">
      <Navbar onLogout={handleLogout} />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ListContainer searchQuery={searchQuery} />
      <ListForm />
    </div>
  );
};

export default HomePage;









// import React from 'react';
// import List from '../components/List';
// import ListForm from '../components/ListForm';
// import SearchBar from '../components/SearchBar';
// import './HomePage.css'

// const HomePage = () => {
//   return (
//     <div>
//       <h2>All Lists</h2>
//       <SearchBar />
//       <List />
//       <ListForm />
//     </div>
//   );
// };

// export default HomePage;
