import History from "./history.tsx";
import classes from './profile.module.scss';
import profile from '../../img/profile.png';
const Profile = () => {
    const options = [
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
        {
            name: "Заказ № 495-300",
            price: 10000,
            data: new Date().getFullYear().toString(),
        },
    ]
    return (
        <div className={classes.profileContent}>
            <img src={profile} alt={"profile"}></img>
            <div className={classes.form}>
                <label>Адрес e-mail:</label><input type={"email"} placeholder={"pleshivaya@izTbilisi.com"}/><button>Изменить</button>
                <label>Пароль: </label><input type={"password"} placeholder={"********"}/><button>Изменить</button>
                <label>Имя:</label><input type={"text"} placeholder={"Костяузер"}/><button>Изменить</button>
                <label>Фамилия:</label><input type={"text"} placeholder={"Махоуни"}/><button>Изменить</button>
                <label>Номер телефона:</label><input type={"tel"} placeholder={"+7........."}/><button>Изменить</button>
            </div>
            <button>Избранное</button>
            <button>Выйти</button>
            <div className={classes.tg}><p>Подтвердить вход в Telegram:</p><button>Получить номер через Telegram</button></div>
            <button className={classes.btnAdmin}>Панель администратора</button>
            <History options={options}/>
        </div>
    );
};

export default Profile;