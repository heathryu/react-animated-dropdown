import React from 'react';

type DropdownItemProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  leftIcon,
  rightIcon,
  children,
}) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
