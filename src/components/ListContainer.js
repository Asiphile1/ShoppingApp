import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, setItemToEdit } from '../features/shoppingList/shoppingListActions';
import './ListContainer.css'
import { useNavigate } from 'react-router-dom';
// import { setItemToEdit } from '../features/shoppingList/shoppingListActions';

function ListContainer() {
  const listItems = useSelector((state) => state.shoppingList.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };


  const handleEdit = (item, index) => {
    dispatch(setItemToEdit(item, index));
    navigate('/list'); 
  };

  const handleShare = (item) => {
    const subject = encodeURIComponent(`Check out this item on my shopping list: ${item.name}`);
    const body = encodeURIComponent(`Item Name: ${item.name}\nQuantity: ${item.quantity}\nNotes: ${item.notes}\nCategory: ${item.category}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  
  return (
    <div className="list-container">
      <h2>Your Shopping List</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Notes</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(listItems) ? (
          listItems.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.notes}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleShare(index)}>Share</button>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


export default ListContainer;
















// import React from 'react';
// import { useSelector } from 'react-redux';
// import List from './List';

// // const ListContainer = () => {
    
// //     const items = useSelector(state => state.shoppingList.items);

// //     return (
// //         <div>
           
// //             <List items={items} />
// //         </div>
// //     );
// // };

// // export default ListContainer;

// const ListContainer = ({ searchQuery }) => {
//     const items = useSelector(state => state.shoppingList.items);

//     // Filter items based on searchQuery
//     const filteredItems = items.filter(item =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <div className="list-container">
//             <List items={filteredItems} />
//         </div>
//     );
// };

// export default ListContainer;