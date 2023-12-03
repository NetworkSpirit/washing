import {FC, useState} from 'react';
import classes from "./basket.module.scss";
interface propsItem {
    img: string;
    name: string;
    info: string;
    price: number;
    priceBuy: number;
}
const BasketIterator:FC<propsItem> = ({img, priceBuy,name, info, price}) => {
    const [count, setCount] = useState(1);
    const [priceItem,] = useState(priceBuy);
    console.log(img);
    return (
        <>
            <div className={classes.item}>
                <img className={classes.itemImg} src={""}/>
                <h3 className={classes.name}>{name}</h3>
                <p className={classes.info}>{info}</p>
                <p className={classes.price}>{count === 1 ? priceItem : price * count}</p>
                <button disabled={count === 1} className={classes.btnMinus} onClick={() => setCount(count - 1)}>-</button>
                <p className={classes.counts}>{count}</p>
                <button className={classes.btnPlus} onClick={() => setCount(count + 1)}>+</button>
                <button className={classes.delete}>x</button>
            </div>
        </>
    );
};

export default BasketIterator;