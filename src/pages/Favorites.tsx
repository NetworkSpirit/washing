import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';
import {FC} from "react";
import Favorites from "../components/favorites/favorites.tsx";
const FavoritesPage: FC = () => {
    return (
        <>
            <Header/>
            <Favorites/>
            <Footer/>
        </>
    );
};

export default FavoritesPage;