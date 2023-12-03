import {useNavigate} from "react-router-dom";
import {
    ADMINADDINFO,
    ADMINADDVIDEO,
    ADMINCONTROLBROADCAST,
    ADMINDELETE,
    ADMINEDITVIDEO,
    ADMININFOORDER
} from "../../../consts.tsx";
import classes from './leftBar.module.scss';

const LeftBlock = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.container}>
            <button onClick={() => navigate(ADMININFOORDER)}>Просмотр оформленных заказов</button>
            <button onClick={() => navigate(ADMINEDITVIDEO)}>Редактирование видео товара</button>
            <button onClick={() => navigate(ADMINADDINFO)}>Добавить данные о резидентах</button>
            <button onClick={() => navigate(ADMINADDVIDEO)}>Добавить видео о резидентах</button>
            <button onClick={() => navigate(ADMINCONTROLBROADCAST)}>Управление трансляцией</button>
            <button onClick={() => navigate(ADMINDELETE)}>Удаление данных</button>
        </div>
    );
};

export default LeftBlock;