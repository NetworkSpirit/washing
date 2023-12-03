import {FC, useState} from "react";
import classes from "./iterator.module.scss";
interface VideoProps {
    name: string;
    label: string;
    type: string;
}

const VideoIterator:FC<VideoProps> = ({name, label, type}) => {
    const [active, setActive] = useState(false);
    return (
        <>
        <div className={classes.videoContent}>
            <h2 className={classes.label}>{name}</h2>
            <button className={classes.btnActive} onClick={() => setActive(!active)}>подробнее</button>
        </div>
            {active ? <div className={classes.infoVinyl}>
            <h1>label: {label}</h1>
            <p>type: {type}</p>
        </div> : ""}
        </>
    );
};

export default VideoIterator;