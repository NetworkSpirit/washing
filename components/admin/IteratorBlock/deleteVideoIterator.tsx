import {FC} from 'react';
import classes from './iterator.module.scss';
interface deleteProps {
    date: string;
    name: string;
    info: string;
}
const DeleteIterator:FC<deleteProps> = ({name, date, info}) => {
    return (
        <div className={classes.video}>
            <p>{date}</p>
            <p>{name}</p>
            <p>{info}</p>
            <button><div className={classes.close}></div></button>
        </div>
    );
};

export default DeleteIterator;