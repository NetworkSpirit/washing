import {FC} from "react";
import classes from "./iterator.module.scss";
interface VideoProps {
    name: string;
}

const VideoIterator:FC<VideoProps> = ({name}) => {
    return (
        <>
            <div className={classes.videoContentDelete}>
                <h2 className={classes.name}>{name}</h2>
                <button className={classes.delete}>Удалить видео</button>
            </div>
        </>
    );
};

export default VideoIterator;