import {useState, FC} from 'react';
import classes from './AccordionBasket.module.scss';
interface PropsAccordion {
    name: string;
    options: string[];
    img: string[];
}
const AccordionBasket:FC<PropsAccordion> = ({name, options, img}) => {
    const [active, setActive] = useState(false);
    return (
        <div onClick={() => setActive(!active)} className={classes.accordionBasket}>
            <h1>{name}</h1>
            <div onClick={() => setActive(!active)} className={active ? classes.activeArrows : classes.arrows}></div>
            <div className={active ? classes.active : classes.nonActive}>
                {options.map((opt, index) => {
                    return <div className={classes.line}><div className={classes.accordionItem}><p>{opt}
                        <button className={classes.circle}>?</button><img src={img[index]}/></p></div></div>
                })}
            </div>
        </div>
    );
};

export default AccordionBasket;