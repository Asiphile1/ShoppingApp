import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function ListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { itemName, quantity, notes, category };
    dispatch(addItem(newItem));
    navigate('/home');
  };

  return (
    <div className="list-page" style={{ backgroundImage: 'url(your-background-image.jpg)', backgroundSize: 'cover' }}>
      <form className="list-form" onSubmit={handleSubmit}>
        <h2>Add a New Item</h2>
        <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select Category</option>
          <option value="food">Food</option>
          <option value="appliances">Appliances</option>
          <option value="medical">Medical Supplies</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}

export default ListPage;












// import React from 'react';
// import { useSelector } from 'react-redux';

// const List = () => {
  
//   const lists = useSelector((state) => state.shoppingList.lists);

  
//   if (!lists) {
//     return <div>Loading...</div>; 
//   }

  
//   if (lists.length === 0) {
//     return <div>No items in the list.</div>; //  content if the list is empty
//   }

//   return (
//     <div>
//       {lists.map((list, index) => (
//         <div key={index}>
//           <h2>{list.name}</h2>
//           <ul>
//             {list.items && list.items.length > 0 ? (
//               list.items.map((item, idx) => (
//                 <li key={idx}>
//                   {item.name} - {item.quantity}
//                 </li>
//               ))
//             ) : (
//               <li>No items</li>
//             )}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default List;
