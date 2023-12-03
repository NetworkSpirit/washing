import {useRef, useState} from 'react';
import classes from './Slider.module.scss';
import SliderItems from './slidersItems';
import cl from 'classnames';
const Carousel = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(0);
    const rand = () => {
        const min = Math.ceil(0);
        const max = Math.floor(1);
        const rands = Math.floor(Math.random() * (max - min + 1)) + min;
        Math.floor(rands);
        if (rands === 1) {
            return '';
        }
        else {
            return '';
        }
    }
    const itemSlider = [
        {
            name: "Sly & The Family Stone",
            info: "There's a Riot Goin' On",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "Charli XCX",
            info: "Pop 2",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "Hank Mobley",
            info: "A Caddy For Daddy",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "Phish",
            info: "Farmhouse",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "5",
            info: "5",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "6",
            info: "6",
            price: 1000,
            albumCover: rand()
        },
        {
            name: "7",
            info: "7",
            price: 1000,
            albumCover: rand()
        }
    ]
    const setPositions = (positions: number) => {
        carousel.current?.childNodes.forEach((element: any) => {
            element.style = `transform: translate(${position}px)`;
        })
        setPosition(position + positions)
    }
    const prevHandler = () => {
        setPositions(210);
    }
    const nextHandler = () => {
        setPositions(-210);
    }
    return (
        <div>
            <div className={classes.Carousel}>
                <h3>Похожие товары</h3>
            <div className={classes.Carousel__slide} ref={carousel}>
                {itemSlider.map(item => {
                    return <SliderItems nameAlbum={item.name} infoAlbum={item.info} albumPrice={item.price} albumCover={item.albumCover}/>
                })}
            </div>
                <button className={cl(classes.Carousel__button, classes.Carousel__button_prev)} onClick={prevHandler}>&larr;</button>
                <button className={cl(classes.Carousel__button, classes.Carousel__button_next)} onClick={nextHandler}>&rarr;</button>
                <div className={classes.contentBtn}>
                </div>
            </div>
        </div>
    );
};
//TODO edit text for info project in more
export default Carousel;