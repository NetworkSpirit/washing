import {useRef, useState} from 'react';
import classes from './Slider.module.scss';
import SliderItems from './slidersItems';
import cl from 'classnames';
const Carousel = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(0);
    const itemVideo = [
        {
            video: "https://www.youtube.com/watch?v=IWxs3Re5wxI"
        },
        {
            video: "https://www.youtube.com/watch?v=IWxs3Re5wxI"
        },
        {
            video: "https://www.youtube.com/embed/kXYiU_JCYtU?si=CHUmezEqG1yq4CJV"
        },
        {
            video: "https://www.youtube.com/embed/kXYiU_JCYtU?si=CHUmezEqG1yq4CJV"
        },
        {
            video: "https://www.youtube.com/embed/kXYiU_JCYtU?si=CHUmezEqG1yq4CJV"
        },
        {
            video: "https://www.youtube.com/embed/kXYiU_JCYtU?si=CHUmezEqG1yq4CJV"
        },
        {
            video: "https://www.youtube.com/watch?v=IWxs3Re5wxI"
        }

    ]
    const setPositions = (positions: number) => {
        setPosition(position + positions)
        carousel.current?.childNodes.forEach((element: any) => {
            element.style = `transform: translate(${position}px)`;
        })
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
                <h3>Clip</h3>
            <div className={classes.Carousel__slide} ref={carousel}>
                {itemVideo.map((item, index) => {
                    return <SliderItems videoFile={item.video} width={index != 0 ? 154 : 601} height={index != 0 ? 159 : 283} style={index != 0 ? 50 : -10}/>
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