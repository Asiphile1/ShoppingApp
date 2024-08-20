// reducer.js
const initialState = [];

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export default shoppingListReducer;








// import { combineReducers } from 'redux';
// import shoppingListReducer from '../features/shoppingList/shoppingListSlice';

// const rootReducer = combineReducers({
//   shoppingList: shoppingListReducer,
// });

// export default rootReducer;
