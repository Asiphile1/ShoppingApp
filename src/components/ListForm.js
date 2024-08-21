import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, setItemToEdit } from '../features/shoppingList/shoppingListActions'; // Import setItemToEdit
import './ListForm.css';
import { useNavigate } from 'react-router-dom'; 
import { updateItem } from '../features/shoppingList/shoppingListActions';
import { addItem } from '../features/shoppingList/shoppingListActions';

const ListForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const itemToEdit = useSelector((state) => state.shoppingList.itemToEdit);
  const editIndex = useSelector((state) => state.shoppingList.editIndex);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity };
    if (itemToEdit) {
      dispatch(updateItem(item, editIndex));
    } else {
      dispatch(addItem(item));
    }
    navigate('/'); 
  };

  return (
    <div className="list-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button type="submit">{itemToEdit ? 'Update Item' : 'Add Item'}</button>
      </form>

      {/* {newItem && (
        <div className="new-added-item">
          <h3>New Item Added</h3>
          <p>Name: {newItem.name}</p>
          <p>Quantity: {newItem.quantity}</p>
        </div>
      )} */}
    </div>
  );
};

export default ListForm;












// import React, { useState } from 'react';

// const ListForm = ({ addItem }) => {
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addItem({ name, quantity });
//     setName('');
//     setQuantity('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Item Name"
//       />
//       <input
//         type="text"
//         value={quantity}
//         onChange={(e) => setQuantity(e.target.value)}
//         placeholder="Quantity"
//       />
//       <button type="submit">Add Item</button>
//     </form>
//   );
// };

// export default ListForm;
