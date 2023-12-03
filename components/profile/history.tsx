import {FC} from 'react';
import classes from './profile.module.scss'
import HistoryIterator from "./historyIterator.tsx";
type item  = {
    name: string,
    price: number;
    data: string;
}
interface historyProps{
    options: Array<item>;
}
const History:FC<historyProps> = ({options}) => {
    return (
        <div className={classes.containerBlock}>
            <h1 className={classes.history}>История заказов</h1>
            <div className={classes.container}>
            {
                options.map((option, index) => {
                    return <HistoryIterator key={index} name={option.name} price={option.price} data={option.data} value={'div' + index}/>})
            }
            </div>
        </div>
    );
};

export default History;