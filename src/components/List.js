import React from 'react';

const List = ({ items = [] }) => {
    return (
        <div>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <div key={index}>
                     
                        {item.name}
                    </div>
                ))
            ) : (
                <p>No items to display.</p>
            )}
        </div>
    );
};

export default List;
