import classes from '../AlbumContent/AlbumContent.module.css';
import {FC} from "react";
type AlbumItem = {
    name: string;
    info: string | undefined;
}
const AlbumInfoItem:FC<AlbumItem> = ({name, info}) => {
    return (
        <div>
            <h1 className={classes.name}>{name}</h1>
            <p className={classes.info}>{info}</p>
        </div>
    );
};

export default AlbumInfoItem;