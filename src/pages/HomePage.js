import React from 'react';
import ListContainer from '../components/ListContainer';
import ListForm from '../components/ListForm';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>All Lists</h2>
      <SearchBar />
      <ListContainer />
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
