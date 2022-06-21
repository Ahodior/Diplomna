import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBLOOD() {
    return(
        <div className="right">
        <h1 className="nazv">Кров пані Жизель</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Немов бунтівний дух, спійманий у пастку, Жизель, перебуваючи у шлюбі з жорстоким чоловіком, веде жалюгідне життя, граючи роль лагідної дружини та леді. Але одного разу вночі, блукаючи своїм новим будинком, Жизель виявляє маленького хлопчика, замкненого в клітці. Схоже, що він — це спадщина від ексцентричного батька її чоловіка. Хлопчика вважають монстром, «безсмертною квіткою, що живиться кров'ю». Незважаючи на свій страх, Жизель починає відвідувати хлопчика вночі. Чи зруйнують ці таємні зустрічі її життя?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Вампіри</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Надприродне</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Антигерой</h3>
                            <h3 className="janrt">Найманці</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterblood1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterblood2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterblood3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBLOOD