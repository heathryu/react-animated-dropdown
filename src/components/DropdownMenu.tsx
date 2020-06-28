import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';

import DropdownItem from './DropdownItem';

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string>('main');

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            goToMenu="settings"
            setActiveMenu={setActiveMenu}
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
          ></DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" setActiveMenu={setActiveMenu} />
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
