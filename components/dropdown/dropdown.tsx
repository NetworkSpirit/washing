import {useState} from 'react';
import DropdownItem from "./dropdownItem.tsx";
import {FC} from "react";
import classes from './dropdown.module.css'
type props = {
    nameDropdown: string
    options: Array<itemTag>;
}
interface itemTag {
    nameItem: string;
    href: string;
}

const ActiveCatalog:FC<props> = ({nameDropdown, options }) => {
    const [active, setActive] = useState(false);
    const [modalActive,] = useState(false);
    return (
        <>
            <div className={classes.container}>
                {
                <button className={active ? classes.btnActive : classes.btnNonActive}
                    onClick={() => setActive(!active)}>{nameDropdown}<div className={classes.arrows}></div></button> }
                <div className={classes.contentDropdown}>
                    <DropdownItem options={options} state={active}/>
                </div>
                <div className={modalActive ? classes.modalActive : classes.modalNonActive}>
                    <div className={classes.circle}></div><h4>Прямая трансляция</h4>
                    <a
                    href={"https://www.youtube.com/watch?v=J-zYoGb2O50"}>https://www.youtube.com/watch?v=J-zYoGb2O50</a>
                    <a
                    href={"https://www.vk.com/watch?v=J-zYoGb2O50"}>https://www.vk.com/watch?v=J-zYoGb2O50</a>
                </div>
            </div>
        </>
    )
};

export default ActiveCatalog;