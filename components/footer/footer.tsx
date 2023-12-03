import React from 'react';
import classes from './footer.module.css';
import text_logo from '../../img/WM_logo_text.svg'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footer_logo}>
          <img src={text_logo} alt='wm_text_logo' />
        </div>
        <div className={classes.social_icons}>
        </div>
        <div className={classes.footer_columns}>
            <div className={classes.footer_column}>
                <h4>Ваш Washing Machine</h4>
                <a href="/login">Вход</a>
                <a href="/Favorites.tsx">Избранные</a>
                <a href="/residents">Резиденты WM</a>
            </div>
            <div className={classes.footer_column}>
                <h4>Поддержка</h4>
                <a href="/feedback">Обратная связь</a>
                <a href="/services">FAQ</a>
                <a href="/contacts">О доставке</a>
            </div>
            <div className={classes.footer_column}>
                <h4>Наши контакты</h4>
                <p>ул. Академика Миллионщикова</p>
                <a href="mailto:email@mail.com">email@mail.com</a>
                <p>+7 (941) 573-05-89</p>
            </div>
        </div>
          <div className={classes.line}></div>
          <div className={classes.lineColumns}>
              <div className={classes.lineColumn}>
                <a href="/feedback">Политика по обработке персональных данных</a>
                <a className={classes.pol} href="/services">Пользовательское соглашение </a>
                <a className={classes.polit} href="/contacts">Политика конфиденциальности</a>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;