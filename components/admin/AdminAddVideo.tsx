import LeftBlock from "./UI/LeftBlock.tsx";
import classes from "./Admin.module.scss";
const AdminAddVideo = () => {
    return (
        <div>
            <LeftBlock/>
            <div className={classes.addVideoLink}>
                <input type={"text"} className={classes.addVideo} placeholder={"Введите ссылку на youtube"}/>
            </div>
            <button className={classes.addVideoBtn}>Сохранить</button>
        </div>
    );
};

export default AdminAddVideo;