import ResidentsIterator from "./residentsIterator.tsx";
import classes from './residents.module.scss';
const options = [
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
    {
        date: "2023",
        name: "any",
        info: "any",
        link: "any"
    },
]
const ResidentsPage = () => {
    return (
        <div>
            <h1 className={classes.media}>Медиа от резидентов</h1>
            <div className={classes.blockMedia}>
                <video className={classes.video}/>
                <h1 className={classes.name}>Hoopa Boiler Room x Present Perfect Festival DJ Set</h1>
                <p>Roots United's Hoopa kicked off our eight-hour marathon broadcast from Present Perfect Festival in St. Petersburg, Russia.</p>
            </div>
            <h1 className={classes.event}>Будущие ивенты</h1>
            <div className={classes.blockEvent}>
            {
                options.map((option, index) => {
                    return <ResidentsIterator key={index} date={option.date} name={option.name} info={option.info} link={option.link}/>
                })
            }
            </div>
        </div>
    );
};

export default ResidentsPage;