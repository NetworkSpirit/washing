import {FC, useState} from 'react';
import classes from './profile.module.scss'
interface historyProps {
    name: string,
    price: number;
    data: string;
    value: string
}
const History:FC<historyProps> = ({name, price, data, value}) => {
    const [active, setActive] = useState(false);
    return (
            <div id={value} className={classes.contentItem}>
                <p className={classes.order}>{name}</p>
                <p>{price} р</p>
                <p>{data}</p>
                <button className={classes.btn} value={value} onClick={() => setActive(!active)}>Подробнее</button>
                {active ? <p className={classes.info}>Количество товара 1 шт. <p className={classes.infoItems}>Адрес доставки: ул. Бабушкина 84 к. 1</p></p> : ""}
            </div>
    );
};

export default History;