import React from "react";
import "../styles/Menu.css";
import MenuList  from "../data/MenuList";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem,id) => {
          return (
            <MenuItem
              key={id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
