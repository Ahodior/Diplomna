import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBLPR() {
    return(
        <div className="right">
        <h1 className="nazv">Більше ніякого принца!</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>"Усі принци однакові,їм, мабуть, справді подобається Джено. Вони постійно шукають його". На відміну від добре відомої казки про принцесу, яка опинилася в лісовій пасці, та вогняного дракону. Мікаєла і Джено не просто заручниця і викрадач. Дворецький? Друг її мами? Щоб з цього ви не обрали, він набагато краще за принца. Одного дня принц отруїв дракона, Джено втрачає свідомість і його тіло починає нагріватися!</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                            <h3 className="janrt">Дракони</h3>
                            <h3 className="janrt">Найманці</h3>
                            <h3 className="janrt">Розумні раси</h3>
                            <h3 className="janrt">Ельфи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterblpr1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterblpr2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterblpr3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBLPR