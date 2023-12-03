import React, {useEffect, useState} from 'react';
import AlbumContent from "../AlbumContent/AlbumContent.tsx"
import './product.css';
import {useParams} from "react-router-dom";
import AlbumInfoItem from "../AlbumContent/AlbumInfoItem.tsx";
import Slider from "../slider/Slider.tsx";
import SliderVideo from "../sliderVideo/SliderVideo.tsx";
import {Vinyls} from "../../type/types.tsx";
//import {useNavigate} from "react-router-dom";
//import {BASKET} from "../../consts.tsx";
//import {useDispatch} from "react-redux";
import {getOneItem} from "../../axios/api.tsx";
//import {getProduct} from "../../hooks/hooks.tsx";

const ContentProduct: React.FC = () => {
    const [vinylList, setVinylList] = useState<Vinyls | null>(null);
    const params = useParams();
    //const history = useNavigate();
    useEffect(() => {
        const { id } = params;
        if (id != null) {
            getOneItem(id, 'винил').then(response => {
                for (const responseKey of response.data.data) {
                    setVinylList(responseKey);
                }
            })
        }
    }, [params]);
    // const echo = () => {
    //     history(BASKET);
    //     localStorage.setItem("name", "1");
    // }
    //const dispatch = useDispatch();
    return (
        <div className={'product'}>
            <img className={'album'} src={vinylList?.image}/>
            <div className={'itemName'}>
                <h1 className={'name'}>{vinylList?.name}</h1>
            </div>
            <div className={'infoPrice'}>
                <p className={'price'}>{vinylList?.price} рублей</p>
            </div>
            <button className={'btnBuy'}>В корзину</button>
            <div className={'albumItemInfo'}>
                <div>
                    <AlbumInfoItem name={"Лейбл:"} info={vinylList?.name}/>
                    <AlbumInfoItem name={"Формат:"} info={vinylList?.name}/>
                    <AlbumInfoItem name={"Страна:"} info={vinylList?.name}/>
                    <AlbumInfoItem name={"Дата релиза:"} info={vinylList?.name}/>
                    <AlbumInfoItem name={"Жанр:"} info={vinylList?.name}/>
                    <AlbumInfoItem name={"Стиль:"} info={vinylList?.name}/>
                </div>
            </div>
            <div className={'trackList'}> 
                <AlbumContent/> </div>
                <SliderVideo/>
                <Slider/>
        </div>
    );
};

export default ContentProduct;