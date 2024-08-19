import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from '../features/shoppingList/shoppingListSlice'; // Assuming you have a slice for the shopping list

const store = configureStore({
    reducer: {
        shoppingList: shoppingListReducer,
    },
});

export default store;
