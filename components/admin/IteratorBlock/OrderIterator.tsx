import {FC, useState} from 'react';
import classes from './iterator.module.scss';
interface OrderProps {
    name: string;
    price: number;
    priceEnd: number;
    date: string;
    count: number;
    address: string;
    phone: string;
}
const OrderIterator:FC<OrderProps> = ({name, price, priceEnd, date,
                                          count, address, phone}) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className={classes.container}>
                <p>{name}</p>
                <p>{price}</p>
                <p>{date}</p>
                <button onClick={() => setActive(!active)}>Подробнее</button>
            </div>
            {active ? <div className={classes.active}>
            <h2>{name}</h2>
                <div className={classes.content}><p>Доставка</p></div>
            <p>Количество</p>
                <div className={classes.content}><p>{count}</p></div>
            <p>Дата заказа</p>
                <div className={classes.content}><p>{date}</p></div>
            <p>Адрес</p>
                <div className={classes.content}><p>{address}</p></div>
            <p>Номер телефона</p>
                <div className={classes.content}><p>{phone}</p></div>
            <p>Цена</p>
                <div className={classes.content}><p>{priceEnd}</p></div>
            </div> : ""}
        </>
    );
};

export default OrderIterator;