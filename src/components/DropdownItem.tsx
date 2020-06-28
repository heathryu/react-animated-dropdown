import React, { Dispatch, SetStateAction } from 'react';

type DropdownItemProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  goToMenu?: string;
  setActiveMenu?: Dispatch<SetStateAction<string>>;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  leftIcon,
  rightIcon,
  goToMenu,
  setActiveMenu,
  children,
}) => {
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
