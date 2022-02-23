import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoPage from './Pages/InfoPage';
import MainPage from './Pages/MainPage';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/info' element={<InfoPage/>}/>;
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    )
        

};

export default MyRoutes;