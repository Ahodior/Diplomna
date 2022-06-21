import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightALH() {
    return(
        <div className="right">
        <h1 className="nazv">Неперевершений алхімік</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Вона - останій і найсильніший алхімік двадцять четвертого століття, однак, через один нещасний випадок, вона потрапляє в нове тіло в інший світ, у якому є сім'ї, що пригнічують її, вилупок-наречений, який зловживає своїм становищем. Тепер героїні у новому тілі доведеться розбиратися з наслідками того, що сталося, й отримати вверх над усіма, хто намагався розтоптати і принизити її.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойові мистецтва</h3>
                            <h3 className="janrt">Ісікай</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Демони</h3>
                            <h3 className="janrt">Медецина</h3>
                            <h3 className="janrt">Культивація</h3>
                            <h3 className="janrt">Алхімія</h3>
                            <h3 className="janrt">Чарівні істоти</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Дракони</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapteralh1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapteralh2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapteralh3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightALH