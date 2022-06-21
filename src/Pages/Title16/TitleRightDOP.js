import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightDOP() {
    return(
        <div className="right">
        <h1 className="nazv">Щоб допомогти тобі зрозуміти</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Королівська сім'я мала величезний борг. Щоб отримати неймовірні гроші і повернути його, вони видали принцесу Віолетту заміж за позашлюбного сина герцога, Вінтера. «Я вперше від народження бачу настільки чудового чоловіка...»
На щастя, хоч шлюб і був за розрахунком, Віолетта закохалася з першого погляду на свого чоловіка, проте шлюбне життя з самого початку було суперечливим. «Будь це проста справа, я навіть не прийшла б до тебе з цим проханням. Давай цього разу разом...»</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Сьодзьо</h3>
                            <h3 className="janrt">Ромаетика</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Гендерна інтрига</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Імперія</h3>
                            <h3 className="janrt">Обмін тілами</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterdop1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterdop2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterdop3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightDOP