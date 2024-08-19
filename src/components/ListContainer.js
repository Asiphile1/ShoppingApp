import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const ListContainer = () => {
    
    const items = useSelector(state => state.shoppingList.items);

    return (
        <div>
           
            <List items={items} />
        </div>
    );
};

export default ListContainer;
