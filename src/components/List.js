import React from 'react';
import './List.css';

const List = ({ items }) => {
  return (
    <div className="list-container">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="list-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
            <p>Notes: {item.notes}</p>
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
};

export default List;









// import React from 'react';

// const List = ({ items = [] }) => {
//     return (
//         <div>
//             {items.length > 0 ? (
//                 items.map((item, index) => (
//                     <div key={index}>
                     
//                         {item.name}
//                     </div>
//                 ))
//             ) : (
//                 <p></p>
//             )}
//         </div>
//     );
// };

// export default List;
