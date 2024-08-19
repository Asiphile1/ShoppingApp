import { combineReducers } from 'redux';
import shoppingListReducer from '../features/shoppingList/shoppingListSlice';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

export default rootReducer;
