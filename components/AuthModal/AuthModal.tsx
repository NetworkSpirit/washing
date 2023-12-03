import {FC, useState} from 'react';
import classes from './AuthModal.module.scss';
interface AuthProps {
    state: boolean;
}
const AuthModal:FC<AuthProps> = ({state}) => {
    const [entry, setEntry] = useState(true);
    return (
        entry ?
        <div className={state ? classes.activeForm : classes.nonActiveForm}>
            <label>Email</label>
            <input/>
            <label>Пароль</label>
            <input/>
            <button>Вход</button>
            <p>Зарегестрироваться</p>
            <p>Восстановить пароль</p>
            <p className={classes.or}>или</p>
            <button className={classes.btnTg}>Войти через Telegram</button>
        </div>
        :
        <div>
            <label>Фамилия и имя</label>
            <input/>
            <label>E-mail</label>
            <input/>
            <label>Пароль</label>
            <input/>
            <label>Повторить пароль</label>
            <input/>
            <button>Регистрация</button>
            <p>Войти в профиль</p>
        </div>
    );
};

export default AuthModal;