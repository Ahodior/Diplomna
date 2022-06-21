import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRight() {
    return(
        <div className="right">
        <h1 className="nazv"> Атака титанів</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Сотню років тому людство звело три величезні стіни, щоби врятуватися від нашестя титанів – гігантських істот-людожерів - і спокійно жило під їхнім захистом, майже нічого не знаючи про зовнішній світ. Та одного дня титани пробили зовнішню стіну і заполонили міста, змусивши людей покинути свої домівки та тікати. Головний герой, Ерен Єґер, разом зі своїми друзями вступає до армії, щоби помститися титанам та досягти своєї мрії – побачити світ поза стінами…</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Псигохологія</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">Жахіття</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Постапокаліптика</h3>
                            <h3 className="janrt">Монтстри</h3>
                            <h3 className="janrt">Виживання</h3>
                            <h3 className="janrt">Війна</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Помста</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterat1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterat2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterat3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRight