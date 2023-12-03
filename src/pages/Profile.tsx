import React from 'react';
import Header from "../components/header/header.tsx";
import Footer from "../components/footer/footer.tsx";
import Profile from "../components/profile/profile.tsx";

const Product: React.FC = () => {
    return (
        <>
            <Header/>
            <Profile/>
            <Footer/>
        </>
    );
};

export default Product;