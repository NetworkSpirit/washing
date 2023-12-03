import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';
import VinylList from '../components/main/VinylList.tsx';
import {FC} from "react";
const Home: FC = () => {
  return (
    <>
        <Header/>
        <VinylList/>
        <Footer/>
    </>
  );
};

export default Home;