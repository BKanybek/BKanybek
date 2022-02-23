import React, { useState } from 'react';
import navLogo from '../../Image/navlogo.svg';
import navBurger from '../../Image/burgerYellow.svg';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <>
            <div className='navbar'>
                <div className="container h-100">
                    <div className="nav-left">
                        <img className='nav-logo' src={navLogo} />
                        <span>Documentation</span>
                    </div>
                    <div className="nav-right">
                        <ul className="nav-list">
                            <li className='nav-item'>Главная</li>
                            <li className='nav-item'>Документация</li>
                            <li className='nav-item'>Добавить</li>
                            <li className='nav-item'><input placeholder='Поиск...' type="text" /></li>
                            <li className='nav-item'>GitHub</li>
                        </ul>
                        <div className="nav-btn">
                            {
                                !mobileNavOpen ? (
                                    <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                                        <img src={navBurger}/>
                                    </button>
                                ) : (null)
                            }
                        </div>
                    </div>
                </div>   
            </div>
            {
                mobileNavOpen ? (
                    <div className="navbar-mobile">
                        <div className="container">
                            <div className="cancel-block" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                                <span>&10006;</span>
                            </div>
                            <ul>
                            <li>Главная</li>
                            <li>Документация</li>
                            <li>Добавить</li>
                            <li><input placeholder='Поиск...' type="text" /></li>
                            <li>GitHub</li>
                            </ul>
                        </div>
                    </div>
                ) : (null)
            }
        </>
    );
};

export default Navbar;