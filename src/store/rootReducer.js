const initialState = {
  items: [],
  itemToEdit: null,
  editIndex: null,
};

const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };

    case 'SET_ITEM_TO_EDIT':
      return {
        ...state,
        itemToEdit: action.payload.item,
        editIndex: action.payload.index,
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index ? action.payload.item : item
        ),
        itemToEdit: null,
        editIndex: null,
      };

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
