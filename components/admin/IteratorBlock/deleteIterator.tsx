import {FC} from 'react';
import classes from './iterator.module.scss';
interface deleteProps {
    name: string;
    nameBtn: string;
}
const DeleteIterator:FC<deleteProps> = ({name, nameBtn}) => {
    return (
        <div className={classes.btnBlock}>
            <h1>{name}</h1>
            <button>{nameBtn}</button>
        </div>
    );
};

export default DeleteIterator;