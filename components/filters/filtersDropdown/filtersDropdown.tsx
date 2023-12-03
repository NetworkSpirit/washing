import {FC, useState} from "react";
import classes from './filterDropdown.module.css';
interface label {
    title: string;
}
interface FilterProps {
    className?: string;
    options: label[];
    nameFilter: string;
    img: string;
    imgActive: string;
}

const FiltersDropdown:FC<FilterProps> = ({className, options, nameFilter,
                                             img, imgActive}) => {
    const [active, setActive] = useState(false);
    return (
        <div className={className}>
            <img src={active ? imgActive : img} alt={img}/><p onClick={() => setActive(!active)}>{nameFilter}</p>
            <div className={ active ? classes.dropDownActive : classes.dropDown}>
                <div className={classes.content}>
                    {options ? options.map(option => {
                        return <><label>{option.title}</label><input type={"checkbox"} value={option.title} /></>
                        }):null}
                </div>
            </div>
        </div>
    );
};
//TODO edit is useState error

export default FiltersDropdown;