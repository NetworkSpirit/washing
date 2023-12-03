import {useEffect, useState, FC} from "react";
import MultiRange from '../multiRangeSlider/multiRangeSlider';
import classes from './Accordion.module.css';
import React from "react";
import {Dictionaries} from "../../type/types.tsx";
interface AccordionProps {
    options: Dictionaries[] | null;
    nameFilters: string;
    nameTag?: string | null;
    clear?: boolean;
}
const AccordionComponents:FC<AccordionProps> = ({options, nameFilters,
                                                    nameTag= null, clear= false }) => {
    const [active, setActive] = useState(true);
    const [checked, setChecked] = useState(
        new Array(options?.length).fill(false)
    );
    const [minInfo, setMinInfo] = useState(0);
    const [maxInfo, setMaxInfo] = useState(90000);
    const [minYearInfo, setMinYearInfo] = useState(1950);
    const [maxYearInfo, setMaxYearInfo] = useState(new Date().getFullYear());
    const min = 0;
    const max = 90000;
    const minYear = 1950;
    const maxYear = new Date().getFullYear();
    // const getInfoFilter = (event: ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value);
    // }
    const onHandleStateChecked = (index: number) => {
        const updateChecked : boolean[] = checked.map((item, indexChecked) =>
            index === indexChecked ? !item : item
        );
        setChecked(updateChecked);
    }
    useEffect(() => {
        setChecked(new Array(options?.length).fill(false));
    }, [clear, options?.length])
    console.log(maxInfo + "     " + minInfo + "    " + minYearInfo + "  " + maxYearInfo);
    const renderItem = () : React.ReactElement => {
        switch(nameTag) {
            case 'MultiRangePrice':
                return (<><MultiRange min={min} max={max} setMinInfo={setMinInfo}
                                      setMaxInfo={setMaxInfo} state={clear}/><div className={classes.line}></div></>)
            case 'MultiRangeYear':
                return <><MultiRange min={minYear} max={maxYear} setMinInfo={setMinYearInfo}
                                     setMaxInfo={setMaxYearInfo} state={clear}/><div
                    className={classes.line}></div></>
            case 'checkbox':
                return <>
                    <div className={classes.checkboxContainer}>
                {options ? options.map((option, index) => { return <>
                    <input key={index} className={classes.input} type={"checkbox"}
                    checked={checked[index]}  value={option.title}
                    onChange={() => onHandleStateChecked(index)
                    }/>
                    <label key={index + 1}>{option.title}</label>
                </>}) : null}
                    </div>
                    <div className={classes.line}></div></>
            default:
                return <div></div>;
        }
    }
    return (
        <div className={classes.accordion}>
            <div className={classes.content}>
                <p>{nameFilters}</p>
                <span className={classes.span} onClick={() => setActive(!active)}></span>
            </div>
            <div className={active ? classes.accordionActive : classes.accordionNonActive}>
                {renderItem()}
            </div>
        </div>
    );
};

export default AccordionComponents;