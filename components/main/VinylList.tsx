import React, {ChangeEvent, useEffect, useState} from 'react';
import Vinyl from "../vinyl/vinyl.tsx";
import ProductFilters from '../filters/filters.tsx'
import classes from './main.module.css';
import {useNavigate} from 'react-router-dom';
import {PRODUCT} from "../../consts.tsx";
import {Vinyls, Merch, Product, Book} from '../../type/types.tsx';
//import {useAppDispatch, useAppSelector} from "../../hook.ts";
import {getItem} from "../../axios/api.tsx";
export let type = 'винил';
export const handler = (e: any) => {
    type = e.target.innerText.toLowerCase();
}
const VinylList: React.FC = () => {
    const [vinylList, setVinylList] = useState<Product[] |
        Merch[] | Vinyls[] | Book[] |null>(null);
    const [sort, setSort] = useState('');
    const [position, setPosition] = useState(0);
    const history = useNavigate();
    //const dispatch = useAppDispatch();
    const handler = (e: ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case "По умолчанию":
                setSort('');
                break;
            case "По алфавиту":
                setSort('name');
                break;
            case "По времени":
                setSort('');
                break;
            case "По убыванию":
                setSort('name%2Cdesc');
        }
    }
    useEffect(() => {
        getItem(position, sort, type).then(response => {
            if(response.data.data.length != 0) {
                setVinylList(response.data.data)
            }
            else {
                alert("Все имеющиеся товары");
            }
        })
        console.log("a");
    }, [position, sort, type])
    //const item = useAppSelector(state => state.product.list);
    return (
    <div>
        <ProductFilters />
        <select className={classes.select} onChange={handler}>
            <option>По умолчанию</option>
            <option>По алфавиту</option>
            <option>По времени</option>
            <option>По убыванию</option>
        </select>
        <div className={classes.vinylList}>
        {vinylList ? vinylList.map((vinyl , index) => {
            return <Vinyl key={index} nameProduct={vinyl.name}
                          info={"title" in vinyl ? vinyl.title : ""} price={vinyl.price} img={vinyl.image}
                          exclusive={index % 3 === 0} onHistory={() => history(PRODUCT + '/' + vinyl.name + '/' + "asd")}/>}): null}
        </div>
      <button className={classes.moreAction} onClick={() => setPosition(position + 12)}>Показать ещё</button>
    </div>
  );
};

export default VinylList;