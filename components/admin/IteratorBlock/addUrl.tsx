import classes from "./iterator.module.scss";
const AddUrl = () => {
    return (
        <div className={classes.urlContainer}>
            <input type={"text"} placeholder={"url"}/><button>Добавить</button>
            <h3>Список видео Hoopa Boiler Room</h3>
            <div className={classes.contentInfo}><p>Hoopa Boiler Room x Present Perfect Festival DJ Set</p></div>
        </div>
    );
};

export default AddUrl;