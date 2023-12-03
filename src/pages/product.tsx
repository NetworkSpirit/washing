import ContentProduct from "../components/contentProduct/contentProduct.tsx";
import Header from '../components/header/header.tsx';
import Footer from '../components/footer/footer.tsx';
import React from 'react';

const Product: React.FC = () => {
    return (
        <>
            <Header/>
            <ContentProduct/>
            <Footer/>
        </>
    );
};

export default Product;