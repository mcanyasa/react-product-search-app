import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <header className="header">
      <div className="header__title">Product Search App</div>
      <div className="header__search">
        <input
          type="search"
          placeholder="Search products by name"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default HeaderPage;
