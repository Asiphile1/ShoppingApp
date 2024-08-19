import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;













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
