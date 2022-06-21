import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightWARPR() {
    return(
        <div className="right">
        <h1 className="nazv">Війна принцес</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Після того, як Хань Молі помирає, її душа потрапляє в азартну гру! Вона стає знаменитою принцесою на горошині. Разом з іншими принцесами з казок головна героїня воюватиме за кохання єдиного принца. Тільки принцеса, яка успішно одружиться з принцем, зможе повернутися в реальний світ і продовжити своє життя, а також отримає величезний бонус! Як вона буде боротись із могутніми принцесами, щоб підкорити серце принца?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Гарем</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Ісікай</h3>
                            <h3 className="janrt">Реінкарнація</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                            <h3 className="janrt">Артефакти</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Ігрові елементи</h3>
                            <h3 className="janrt">Імперія</h3>
                            <h3 className="janrt">Система</h3>
                            <h3 className="janrt">Приховування особи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterwarpr1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterwarpr2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterwarpr3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightWARPR