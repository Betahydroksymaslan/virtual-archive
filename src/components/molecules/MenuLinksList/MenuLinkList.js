import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SettingsIcon } from 'assets/icons/settingsIcon.svg';
import { ReactComponent as HomeIcon } from 'assets/icons/homeIcon.svg';
import { ReactComponent as UsersIcon } from 'assets/icons/usersIcon.svg';
import { ReactComponent as DocumentIcon } from 'assets/icons/documentIcon.svg';
import { MenuList, MenuLink, Link } from './MenuLinksList.styles';

const MenuLinkList = ({ menuOff }) => {
  const menuLinks = [
    {
      name: 'Start',
      linkTo: '/home',
      icon: <HomeIcon />,
    },
    {
      name: 'Dokumenty',
      linkTo: '/yjt',
      icon: <DocumentIcon />,
    },
    {
      name: 'Pracownicy',
      linkTo: '/employees',
      icon: <UsersIcon />,
    },
    {
      name: 'Konto',
      linkTo: '/userSettings',
      icon: <SettingsIcon />,
    },
  ];

  const menuLinksList = menuLinks.map(({ name, linkTo, icon }) => (
    <MenuLink key={name} onClick={menuOff}>
      <Link to={linkTo}>
        {icon}
        {name}
      </Link>
    </MenuLink>
  ));

  return <MenuList>{menuLinksList}</MenuList>;
};

MenuLinkList.propTypes = {
  menuOff: PropTypes.func,
};

export default MenuLinkList;
