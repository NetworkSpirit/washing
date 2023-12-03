import LeftBlock from "./UI/LeftBlock.tsx";
import VideoIterator from "./IteratorBlock/VideoIterator.tsx";
import classes from "./Admin.module.scss";
import DeleteIteratorVideo from "./IteratorBlock/deleteIteratorVideo.tsx";
import {useState} from "react";
import AddUrl from "./IteratorBlock/addUrl.tsx";
const AdminEditVideo = () => {
    const [active, setActive] = useState(true);
    const options = [
        {
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },
        {
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },
        {
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },
        {
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },
        {
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },{
            name: "oomph",
            label: "dero",
            type: "vinyl"
        },
















    ]
    return (
        <div>
            <LeftBlock/>
            <button className={classes.btn} onClick={() => setActive(true)}>Удаление видео</button>
            <button className={classes.btn} onClick={() => setActive(false)}>Добавление</button>
            <div className={classes.content}>
                <h1>Название пластинки</h1>
                <div className={classes.videoContainer}>
                    {options.map((option, index) => {
                        return <VideoIterator key={index} name={option.name} label={option.label} type={option.type}/>
                    })}
                </div>
                {active ? <h2 className={classes.itemName}>Список видео Hoopa Boiler Room</h2> : ""}
                {active ? <div className={classes.deleteContainer}>
                    {
                        options.map((option, index) => {
                            return <DeleteIteratorVideo key={index} name={option.name}/>
                        })
                    }
                </div> : <div className={classes.addUrl}><AddUrl/></div>}
            </div>
        </div>
    );
};

export default AdminEditVideo;