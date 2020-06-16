import React from 'react';

type NavItemProps = {
  icon: string | React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};

export default NavItem;
