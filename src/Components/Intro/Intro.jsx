import React from 'react';
import introHtml from '../../Image/introHtml.png'

const intro = () => {
    return (
        <div>
            <h1>Вступление в HTML</h1>
            <p className="intro-desc">
                Возврат нескольких элементов из компонента является распространённой практикой в React. Фрагменты позволяют формировать список дочерних элементов, не создавая лишних узлов в DOM.
            </p>
            <img src={introHtml} className='intro-img'/>
            <p className='explanation'>
                Обратите внимание на первую строку &lsaquo;!DOCTYPE html&rsaquo;. DOCTYPE (document type) — служебная информация для браузера, где описывается стандарт HTML, который нужно обработать. Текущий стандарт HTML5 поддерживается всеми браузерами, поэтому достаточно указать в первой строке документа &lsaquo;!DOCTYPE html&rsaquo;, который говорит, что наш документ размечен по стандарту HTML5.
            </p>
            <hr />
        </div>
    );
};

export default intro;