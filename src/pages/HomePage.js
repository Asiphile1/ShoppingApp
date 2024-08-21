// import React from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ListContainer from '../components/ListContainer';
import ListForm from '../components/ListForm';
import SearchBar from '../components/SearchBar';
import './HomePage.css';
// import ListContainer from '../components/ListContainer'

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
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');

  };


  const handleAddItem = () => {
    navigate('/list');  
  };



  return (
    <div className="homepage">
      <Navbar onLogout={handleLogout} />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <button onClick={handleAddItem}>Add Item</button> 
      <ListContainer searchQuery={searchQuery} />
     
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
