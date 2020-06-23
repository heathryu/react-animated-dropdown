import React, { useState } from 'react';

type NavItemProps = {
  icon: string | React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
