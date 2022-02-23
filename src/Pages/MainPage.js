import React from 'react';
import Footer from '../Components/Footer/Footer';
import MainPageBody from '../Components/MainPageBody/MainPageBody';
import Navbar from '../Components/NavBar/Navbar';

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <MainPageBody/>
            <Footer/>
        </div>
    );
};

export default MainPage;