import classes from './basket.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import BasketIterator from "./BasketIterator.tsx";
import BasketVoid from "./basketVoid.tsx";
import AccordionBasket from "./Accordion/AccordionBasket.tsx";
import sber from '../../img/sberpay.svg';
import sbp from '../../img/spb.svg'
import logo from '../../img/ll.png';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

interface img {
    id: number;
    title: string;
    url: string;
}
const BasketItem = () => {
    const [imgs, setImg] = useState<img[] | null>(null);
    console.log(imgs);
    const item = [
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        },
        {
            img: "asdasd",
            name: "asdasd",
            info: "asdasda",
            price: 1000
        }
    ]
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos?_limit=${item.length};`
        axios.get(url).then((response) => {
            setImg(response.data);
        });
    }, []);
    const options = [
    "СБП (Система быстрых платежей)","SberPay"];
    const img = [sbp, sber];
    let price = 0;
    item.map(iter => price += iter.price);
    return (
        localStorage.length === 0 ?
        <div>
            <div className={classes.containerItem}>
                {
                    item.map((item, index) => {
                        return <BasketIterator img={item.img} priceBuy={price}
                                               name={""} info={item.info}
                                               price={item.price} key={index}/>
                    })
                }
                <h2 className={classes.v}>Всего к оплате</h2>
                <p className={classes.itog}>{price}</p>
            </div>
            <div className={classes.data}>
                <h1>1 Данные покупателя</h1>
                <input type={"text"} placeholder={"Имя"}/>
                <input type={"tel"} placeholder={"Телефон"}/>
                <input type={"email"} placeholder={"Email(необязательно)"}/>
            </div>
            <div className={classes.get}>
                <h1>2 Выберите способ получения</h1>
                <button>Самовывоз</button>
                <button>СДЭК</button>
                <button>Почта РФ</button>
                <input type={"radio"}/><label>Доставка по Санкт-Петербургу</label>
                <div className={classes.map}>
                    <img src={logo} />
                    <p>Ежедневно с 12:00 до 21:00</p>
                    <p className={classes.nal}>В наличие 5 шт.</p>
                    <button onClick={() => document.location.href=
                            'https://yandex.ru/maps/2/saint-petersburg/house/baskov_' +
                        'pereulok_23/Z0kYdQJoS0UBQFtjfXVyeH9kYA==' +
                        '/?ll=30.358206%2C59.939374&z=16'}>Посмотреть на карте</button>
                    <YMaps>
                        <div className={classes.ymap}>
                            <Map defaultState={{ center: [59.939415, 30.358143], zoom: 9 }} width={371} height={180}>
                                <Placemark defaultGeometry={[59.939415, 30.358143]} />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
            <div className={classes.pay}>
                <h1>3 Выберите способ оплаты</h1>
                <button>Онлайн</button>
                <button>Наличными</button>
                <AccordionBasket name={"Оплатить бонусами или электронной подарочной картой"} options={options} img={img}/>
            </div>
            <div className={classes.confirm}>
                <button>Подтвердить заказ</button>
                <p>Чек будет отправлен на телефон</p>
                <p className={classes.confirmName}>Подтверждая заказ, Вы соглашаетесь с условиями <a href={"#"}>политикой конфиденциальности</a></p>
            </div>
            <div className={classes.verticalLine}>
                <h1>Безопасная оплата</h1>
                <p>Ваши платежи под надежной защитой</p>
                <h1>Легкий возврат</h1>
                <p>Вернем всю сумму или обменяем товар</p>
                <h1>Нужна помощь ?</h1>
                <a>+79213065178</a>
            </div>
        </div> :
            <BasketVoid/>
    );
};

export default BasketItem;