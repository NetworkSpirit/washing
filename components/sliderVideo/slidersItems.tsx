import classes from './Slider.module.scss';
import {FC} from "react";
interface VideoProps {
    videoFile: string;
    width: number;
    height: number;
    style: number;
}
const SliderVideo: FC<VideoProps> = ({videoFile, width, height, style}) => {
    return (
        <div className={classes.video}>
            <video style={{position: "relative", top: style, borderRadius: 10}} width={width} height={height} src={videoFile}><source src={videoFile}/></video>
        </div>);
};

export default SliderVideo;