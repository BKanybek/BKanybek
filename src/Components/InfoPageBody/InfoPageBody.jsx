import React from 'react';
import Begin from '../Begin/Begin';
import Intro from '../Intro/Intro';
import PenIcon from '../../Image/penIcon.svg'
import PlusIcon from '../../Image/plusIcon.svg'
import Sidebar from '../Sidebar/Sidebar';

const InfoPageBody = () => {
    return (
        <div className='container'>
            <div className="home-page-body">
                <div className="intro">
                    <div>
                        <Intro/>
                    </div>
                    <div className='begin mb-3'>
                        <Begin/>
                    </div>
                    <div className="edit-and-add">
                        <a href="#"><img src={PenIcon}/>Редактировать</a>
                        <a href="#"><img src={PlusIcon}/>Добавить документацию</a>
                    </div>
                </div>
                <div className="sidebar">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
};

export default InfoPageBody;