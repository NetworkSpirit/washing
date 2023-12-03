import FavoritesIterator from "./favoritesIterator.tsx";
import classes from "./favorites.module.scss";
const Favorites = () => {
    const options = [
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },
        {
            name: "Sly & The Family Stone ",
            info: "There's a Riot Goin' On",
            price: 1000,
        },

    ]
    return (
        <div className={classes.container}>
            <h1>Избранные</h1>
            <div className={classes.content}>
            {
                options.map((option, index) => {
                    return <FavoritesIterator key={index} name={option.name} info={option.info} price={option.price}/>
                })
            }
            </div>
        </div>
    );
};

export default Favorites;