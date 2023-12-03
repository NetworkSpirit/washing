import LeftBlock from "./UI/LeftBlock.tsx";
import classes from "./Admin.module.scss";
const AdminAddInfo = () => {
    return (
        <div>
            <LeftBlock/>
            <div className={classes.addContentBlock}>
                <input className={classes.infoInput} type={"text"} placeholder={"Добавить дату мероприятия"}/>
                <input type={"text"} placeholder={"Никнейм резидента"}/>
                <input type={"text"} placeholder={"Место выступления"}/>
                <input className={classes.link} type={"text"} placeholder={"Ссылка"}/>
                <textarea className={classes.inputType} placeholder={"Описание мероприятия"}/>
            </div>
            <button className={classes.addBtn}>Опубликовать</button>
            <button className={classes.Plus}><p>+</p></button>
        </div>
    );
};

export default AdminAddInfo;