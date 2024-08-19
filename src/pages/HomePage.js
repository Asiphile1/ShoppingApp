import React from 'react';
import List from '../components/List';
import ListForm from '../components/ListForm';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <h2>All Lists</h2>
      <SearchBar />
      <List />
      <ListForm />
    </div>
  );
};

export default HomePage;
