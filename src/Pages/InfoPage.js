import React from 'react';
import Footer from '../Components/Footer/Footer';
import InfoPageBody from '../Components/InfoPageBody/InfoPageBody';
import Navbar from '../Components/NavBar/Navbar';

const InfoPage = () => {
    return (
        <div>
            <Navbar/>
            <InfoPageBody/>
            <Footer/>
        </div>
    );
};

export default InfoPage;