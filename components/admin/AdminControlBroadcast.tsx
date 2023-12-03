import LeftBlock from "./UI/LeftBlock.tsx";
import classes from "./Admin.module.scss";
const AdminControlBroadcast = () => {
    return (
        <div>
            <LeftBlock/>
            <div className={classes.containerBroadcast}>
                <p></p>
                <label className={classes.switch}>
                <input type={"checkbox"}/>
                <span className={classes.slider}></span>
                </label>
                <div className={classes.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <input type={"text"}/>
                </div>
            </div>
            <button className={classes.save}>Сохранить</button>
        </div>
    );
};

export default AdminControlBroadcast;