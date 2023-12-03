import classes from "./dropdown.module.css";
import {handler} from "../main/VinylList.tsx";
type props = {
    options: Array<itemTag>;
    state: boolean;
}
interface itemTag {
    nameItem: string;
    href: string;
}
const DropdownItem = ({options, state}: props) => {
    return (
        options.map((option, index) => {
            return <button onClick={handler} key={index} className={state ? classes.dropdownActive : classes.dropdownNonActive}>
                {option.nameItem}
                <div className={ index != options.length - 1 ? classes.line : ""}></div>
            </button>
        })
    );
};

export default DropdownItem;