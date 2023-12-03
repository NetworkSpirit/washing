import React, {useState} from 'react';
import classes from './header.module.css';
import mainLogo from '../../img/WM_Logo.svg';
import searchIcon from '../../img/searchIcon.png'
import profileIcon from '../../img/profileIcon.svg'
import cartIcon from '../../img/basket.svg'
import Dropdown from "../dropdown/dropdown.tsx";
import {useNavigate} from "react-router-dom";
import {BASKET, HOME} from "../../consts.tsx";
import AuthModal from "../AuthModal/AuthModal.tsx";
const Header: React.FC = () => {
    const history = useNavigate();
    const [active, setActive] = useState(false);
    //const [isOpen, setIsOpen] = useState(false);
    const optionCatalog = [
      {
          nameItem: "Винил",
          href: "/main"
      },
      {
          nameItem: "Кассеты",
          href: "/main"
      },
      {
          nameItem: "Мерч",
          href: "/main"
      },
      {
          nameItem: "Книги",
          href: "/main"
      }
      ];
    const optionAbout = [
        {
            nameItem: "О магазине",
            href: "/main"
        },
        {
            nameItem: "Резиденты",
            href: "/main"
        },
        {
            nameItem: "Трансляции",
            href: "/main"
        }
    ];

  return (
    <header className={classes.header}>
      <nav className= {classes.header_navigation}>
          <div onClick={() => history(HOME)} className={classes.header_logo}>
          <img src={mainLogo} alt='WM_Logo' />
          </div>
          <div className={classes.menu}>
              <Dropdown nameDropdown={"КАТАЛОГ"} options={optionCatalog}/>
              <Dropdown nameDropdown={"О WASHING MACHINE"} options={optionAbout}/>
          </div>
          <div className={classes.search_container}>
              <input type="text" placeholder="Search..." className={classes.search_input}/>
          <button className={classes.search_button}>
          <img src={searchIcon} alt='searchIcon' />
          </button>
        </div>
        <button onClick={() => history(BASKET)} className={classes.cart_button}>
        <img src={cartIcon} alt='cartIcon' />
        </button>
        <button onClick={() => setActive(!active)} className={classes.auth_button}>
        <img src={profileIcon} alt='searchIcon' />
        </button>
      </nav>
        <AuthModal state={active}/>
    </header>
  );
};

export default Header;