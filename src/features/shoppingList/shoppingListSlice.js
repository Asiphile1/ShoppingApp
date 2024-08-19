import { createSlice } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
       
    },
});

export const { addItem, removeItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;










// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   lists: [],
//   status: 'idle',
//   error: null,
// };

// const shoppingListSlice = createSlice({
//   name: 'shoppingList',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       // Logic to add an item
//     },
//     removeItem: (state, action) => {
//       // Logic to remove an item
//     },
//     updateItem: (state, action) => {
//       // Logic to update an item
//     },
//     setLists: (state, action) => {
//       state.lists = action.payload;
//     },
//   },
// });

// export const { addItem, removeItem, updateItem, setLists } = shoppingListSlice.actions;
// export default shoppingListSlice.reducer;
