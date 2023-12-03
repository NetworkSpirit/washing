import classes from './vinyl.module.css';
import basket from '../../img/basket.svg';
import basketActive from '../../img/basketActive.svg';
import {useState, FC, useRef} from 'react';
interface VinylProps {
    nameProduct: string;
    info: string;
    price: number;
    img: string;
    exclusive?: boolean;
    onHistory?: () => void;
}
const Vinyl: FC<VinylProps> = ({ nameProduct, info, price, img, exclusive, onHistory}) => {
    const refDiv = useRef(null);
    const [active, setActive] = useState(false);
    const onMouseLeaveSetActive = () => {
        setActive(!active);
    };
    const exclusiveInfo = () => {

        const item = refDiv.current;
        if(exclusive && item) {
            item.style.boxShadow = "-10px 10px 2px rgba(255, 223, 0, 0.3)"
        }
    }
    const exclusiveInfoLeave = () => {
        const item = refDiv.current;
        if (exclusive && item) {
            item.style.boxShadow = "none"
        }
    }
    return (
        <div ref={refDiv} onMouseEnter={exclusiveInfo} onMouseLeave={exclusiveInfoLeave} onClick={onHistory} className={classes.content}>
            <img src={img} alt=""></img>
            <div className={classes.contentInfoBlock}>
                <h1>{nameProduct}</h1>
                <p>{ info }</p>
            </div>
            <div className={classes.contentPriceBlock}>
                {exclusive ? <p className={classes.exclusive}>exclusive</p> : ""}
                <div className={classes.line}>
                </div>
                <p className={classes.price}> { price } &#8381;</p>
                <a><img onMouseEnter={onMouseLeaveSetActive} onMouseLeave={onMouseLeaveSetActive}
                        src={!active ? basket: basketActive} className={classes.imgBuy} alt={"basket"}/></a>
            </div>
        </div>
    );
};

export default Vinyl;