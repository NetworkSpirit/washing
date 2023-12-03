import {
    ADMIN,
    ADMIN_ROUTE,
    ADMINADDINFO, ADMINADDVIDEO, ADMINCONTROLBROADCAST, ADMINDELETE,
    ADMINEDITVIDEO,
    ADMININFOORDER,
    BASKET,
    FAVORITES,
    HOME,
    PRODUCT,
    PROFILE, RESIDENTS
} from "./consts.tsx";
import Home from "./pages/Home.tsx";
import Product from "./pages/product.tsx";
import Basket from "./pages/basket.tsx";
import Profile from "./pages/Profile.tsx";
import FavoritesPage from "./pages/Favorites.tsx";
import Admin from "./pages/Admin.tsx";
import AdminEditVideo from "./pages/AdminEditVideo.tsx";
import AdminAddInfoPeople from "./pages/AdminAddInfoPeople.tsx";
import AdminAddVideoLink from "./pages/AdminAddVideoLink.tsx";
import AdminDeletePage from "./pages/AdminDeletePage.tsx";
import Residents from "./pages/Residents.tsx";
import AdminBroadcast from "./pages/AdminBroadcast.tsx";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Components: Home,
    }
]

export const publicRoutes = [
    {
        path: HOME,
        Components: Home,
    },
    {
        path: PRODUCT + '/:id',
        Components: Product,
    },
    {
        path: BASKET,
        Components: Basket
    },
    {
        path: PROFILE,
        Components: Profile
    },
    {
        path: FAVORITES,
        Components: FavoritesPage
    },
    {
        path: ADMIN,
        Components: Admin
    },
    {
        path: ADMININFOORDER,
        Components: Admin
    },
    {
        path: ADMINADDINFO,
        Components: AdminAddInfoPeople
    },
    {
        path: ADMINEDITVIDEO,
        Components: AdminEditVideo
    },
    {
        path: ADMINDELETE,
        Components: AdminDeletePage
    },
    {
        path: ADMINCONTROLBROADCAST,
        Components: AdminBroadcast
    },
    {
        path: ADMINADDVIDEO,
        Components: AdminAddVideoLink
    },
    {
        path: RESIDENTS,
        Components: Residents
    }

]