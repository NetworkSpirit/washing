import {FC, useState} from 'react';
import classes from './residents.module.scss';
interface ResidentProps {
    date: string;
    name: string;
    info: string;
    link: string;
}
const ResidentsIterator:FC<ResidentProps> = ({date, name, info, link}) => {
    const [active, setActive] = useState(false);
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <p>{date}</p>
                <p>{name}</p>
                <p>{info}</p>
                <button className={classes.btn} onClick={() => setActive(!active)}>Ссылка на ивент</button>
            </div>
            <div className={active ? classes.active : classes.nonActive}>
                <a>{link}</a>
            </div>
        </div>
    );
};

export default ResidentsIterator;