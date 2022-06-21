import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightSP() {
    return(
        <div className="right">
        <h1 className="nazv">У мого ворога - суперсила!</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Руда дівчинка з дуже складним характером вже звикла проводити свої шкільні дні задираючи інших учнів, але вона потрапляє під приціл нового президента студради. Що робитиме Мо Тао, якщо дізнається, хто такий Дзянь Шу наспраавді, і як саме він впливає на її життя.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chaptersp1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chaptersp2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chaptersp3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightSP