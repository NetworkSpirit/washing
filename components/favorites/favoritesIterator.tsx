import {FC} from 'react';
import classes from './favorites.module.scss';
import search from '../../img/searchIcon.png';
interface favoritesProps {
    name: string;
    info: string;
    price: number;
}
const FavoritesIterator:FC<favoritesProps> = ({name, info, price}) => {
    return (
        <div className={classes.contentItem}>
            <img src={search} alt={"search"}/>
            <h1>{name}</h1>
            <p>{info}</p>
            <p className={classes.price}>{price}</p>
            <button>Добавить в корзину</button>
            <button className={classes.btn}>x</button>
        </div>
    );
};

export default FavoritesIterator;