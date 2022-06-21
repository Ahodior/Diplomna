import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBL() {
    return(
        <div className="right">
        <h1 className="nazv"> Чорнна конюшина</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Ще дітьми Аста і Юно були залишені біля порога церкви в глухому селі. Хлопчики пообіцяли один одному, що один із них стане Королем магів. Проте, що старші вони ставали, то більше різниці між ними з'являлося. Юно був генієм магії, а Аста тренував своє тіло лише фізично. Коли їм виповнилося по 15 років, настав час отримувати гримуари. Юно став володарем книги з чотирилистою конюшиною (більшість людей отримують книги з трилистою), у той час як Аста не отримав нічого. Однак, коли Юно загрожувала небезпека, Аста розкрив свою справжню силу.
У результаті хлопець став володарем гримуару з п'ятилистою конюшиною під назвою «Чорна конюшина»! Тепер двоє друзів подорожують світом, щоб досягти одну й ту саму мету.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Псигохологія</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">ГГ імба</h3>
                            <h3 className="janrt">Жахіття</h3>
                            <h3 className="janrt">Демони</h3>
                            <h3 className="janrt">Владика демонів</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Постапокаліптика</h3>
                            <h3 className="janrt">Монтстри</h3>
                            <h3 className="janrt">Нежить</h3>
                            <h3 className="janrt">Відьми</h3>
                            <h3 className="janrt">Виживання</h3>
                            <h3 className="janrt">Ранги сили</h3>
                            <h3 className="janrt">Лицарі</h3>
                            <h3 className="janrt">Війна</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Розумні раси</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Помста</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Підземелья</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterbl1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterbl2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterbl3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBL