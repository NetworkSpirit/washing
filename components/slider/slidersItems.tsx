import classes from './Slider.module.scss';
import {FC} from "react";
interface CarouselProps {
    nameAlbum: string;
    infoAlbum: string;
    albumPrice: number;
    albumCover: string;
}
const SliderItems: FC<CarouselProps> = ({nameAlbum, infoAlbum, albumPrice, albumCover}) => {
    return (
        <div className={classes.Carousel__item}>
            <img className={classes.img} src={albumCover}></img>
            <p className={classes.price}>{albumPrice}</p>
            <p className={classes.name}>{nameAlbum}</p>
            <p className={classes.info}>{infoAlbum}</p>
    </div>);
};

export default SliderItems;