import DeleteIterator from "./IteratorBlock/deleteIterator.tsx";
import {useState} from "react";
import classes from "./Admin.module.scss";
import LeftBlock from "./UI/LeftBlock.tsx";
import search from "../../img/searchIcon.png"
import DeleteVideoIterator from "./IteratorBlock/deleteVideoIterator.tsx";
const AdminDelete = () => {
    const [active, setActive] = useState("Товары");
    const options = [
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
        {
            name: "Sly & The Family Stone - There's a Riot Goin' On",
            type: "btn",
            nameBtn: "Удалить товар",
            info: {
                date: "1 августа",
                name: "Hoopa",
                info: "K-30",
            }
        },
    ]
    const optionsInfo = [
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
        {
            date: "1 августа",
            name: "Hoopa",
            info: "K-30"
        },
    ]
    return (
        <div>
            <LeftBlock/>
            <button onClick={() => setActive("Товары")} className={classes.delBtn}>Товары</button>
            <button onClick={() => setActive("Резеденты")} className={classes.delBtn}>Резиденты</button>
            <input type={"text"} className={classes.search} placeholder={"Поиск"}/><button className={classes.searchBtn}><img src={search} alt={"search"}/></button>
            {active === "Товары" ?
                <div className={classes.containerDel}>
                    <div className={classes.delContainer}>
                        {
                            options.map((option, index) => {
                                return <DeleteIterator key={index} name={option.name} nameBtn={option.nameBtn}/>
                            })
                        }
                    </div>
                </div>
                :
                <>
                    <div className={classes.containerDel}>
                        <div className={classes.delContainer}>
                            {
                                options.map((option, index) => {
                                    return <DeleteIterator key={index} name={option.name} nameBtn={option.nameBtn}/>
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.videoBlock}>
                        <div className={classes.video}>
                        {
                            optionsInfo.map((option, index) => {
                                return <DeleteVideoIterator key={index} date={option.date} name={option.name}
                                                            info={option.info}/>
                            })
                        }
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default AdminDelete;