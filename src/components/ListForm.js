// ListForm.js
import React, { useState } from 'react';
import './ListForm.css';

const ListForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [newItem, setNewItem] = useState(null); // To store and display new item details

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity };
    addItem(item);
    setNewItem(item); //  the invisible div
    setName('');
    setQuantity('');
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
        <button type="submit">Add Item</button>
      </form>

      {newItem && (
        <div className="new-added-item">
          <h3>New Item Added</h3>
          <p>Name: {newItem.name}</p>
          <p>Quantity: {newItem.quantity}</p>
        </div>
      )}
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
