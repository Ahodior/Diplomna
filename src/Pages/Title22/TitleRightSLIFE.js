import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightSLIFE() {
    return(
        <div className="right">
        <h1 className="nazv">Солодке життя Аделаїди</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Героїня потрапляє в аварію та перероджується в аристократку в іншому світі. Не зважаючи на спогади з попереднього життя вона проживає своє спокійне життя, до того моменту, як зі столиці до неї не доходять плітки про жінку, яка мандрує між вимірами. Тоді Аделаїда вирішує відправитись в столицю, щоб зустрітися з тією жінкою. Та що її там чекає?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Ісекай</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Реінкарнація</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Помста</h3>
                            <h3 className="janrt">Політика</h3>
                            <h3 className="janrt">Шантаж</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterslife1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterslife2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterslife3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightSLIFE