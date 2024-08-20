import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './shoppingListReducer';

const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    // other reducers
  },
});

export default store;
