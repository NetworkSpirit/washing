import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes.tsx";
const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {isAuth ? authRoutes.map((path) => {
                return <Route key={path.path} path={path.path} Component={path.Components}/>
            }) : publicRoutes.map((path) => {
                return <Route key={path.path} path={path.path} Component={path.Components}/>
            })}
        </Routes>
    );
};
//TODO edit redirect to start page
export default AppRouter;