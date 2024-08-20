import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './rootReducer';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    
  },
});

export default store;
