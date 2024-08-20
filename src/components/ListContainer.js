import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/shoppingList/shoppingListActions';
import './ListContainer.css'

function ListContainer() {
  const listItems = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeItem(index));
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
          {listItems.map((item, index) => (
            <tr key={index}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.notes}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleRemove(index)}>Edit</button>
                <button onClick={() => handleRemove(index)}>Share</button>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
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