import React from 'react';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        <header className="hero-section">
            <div className="search-overlay">
                <h1>Search Your List</h1>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search items..."
                />
            </div>
        </header>
    );
};

export default Header;
