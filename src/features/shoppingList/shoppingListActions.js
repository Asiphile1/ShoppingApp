export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item,
  });
  
  export const removeItem = (index) => ({
    type: 'REMOVE_ITEM',
    payload: index,
  });


export const setItemToEdit = (item, index) => ({
  type: 'SET_ITEM_TO_EDIT',
  payload: { item, index },
});

export const updateItem = (item, index) => ({
  type: 'UPDATE_ITEM',
  payload: { item, index },
});
  