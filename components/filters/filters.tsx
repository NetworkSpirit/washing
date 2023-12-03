import classes from "./filters.module.css";
import Accordion from '../Accordion/Accordion'
import React, {useEffect, useState} from "react";
import {getGenresType, getLabel, getVinylType} from "../../axios/api.tsx";
import {Dictionaries} from "../../type/types.tsx";
const ProductFilters: React.FC = () => {
    const [label, setLabel] = useState<Dictionaries[] |
        null>(null);
    const [clear, setClear] = useState(false);
    const [vinylType, setVinylType] = useState<Dictionaries[] |
        null>(null);
    const [genresType, setGenresType] = useState<Dictionaries[] |
        null>(null);
    useEffect(() => {
        getLabel().then(response => {
            setLabel(response.data.data);
        })
        getVinylType().then(response => {
            setVinylType(response.data.data);
        })
        getGenresType().then(response => {
            setGenresType(response.data.data);
        })
    }, []);
  const clearClick = () => {
      setClear(!clear);
  }
  return (
    <>
      <div className={classes.filtersContent}>
          <button className={classes.clear} onClick={() => clearClick()}>сбросить</button>
          <div className={classes.filter_dropdown}>
            <Accordion clear={clear} options={vinylType} nameFilters={"Тип пластинки"} nameTag={"checkbox"}/>
          </div>
          <div className={classes.filter_dropdown}>
            <Accordion clear={clear} nameFilters={"Цена"} nameTag={"MultiRangePrice"} options={[]}/>
          </div>
          <div className={classes.filter_dropdown}>
            <Accordion clear={clear} options={genresType} nameFilters={"Жанр"} nameTag={"checkbox"}/>
          </div>
          <div className={classes.filter_dropdown}>
            <Accordion clear={clear} nameFilters={"Год"} nameTag={'MultiRangeYear'} options={[]}/>
          </div>
          <div className={classes.filter_dropdown}>
            <Accordion clear={clear} options={label} nameFilters={"Лейбл"} nameTag={"checkbox"}/>
          </div>
          <button className={classes.btn}>Применить</button>
      </div>
    </>
  );
};

export default ProductFilters;