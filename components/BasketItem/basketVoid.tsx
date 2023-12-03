import classes from "./basket.module.scss";
import album from "../../img/album.png";
import {HOME} from "../../consts.tsx";
import {useNavigate} from "react-router-dom";
const BasketVoid = () => {
    const history = useNavigate()
    return (
        <div>
            <h1 className={classes.basket}>Корзина</h1>
            <div className={classes.basketVoid}>
                <img src={album} alt={"album"}/>
                <h1 className={classes.nameH}>Корзина пуста</h1>
                <p className={classes.infoP}>Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</p>
                <button className={classes.btn} onClick={() => history(HOME)}>На главную</button>
            </div>
        </div>
    );
};

export default BasketVoid;