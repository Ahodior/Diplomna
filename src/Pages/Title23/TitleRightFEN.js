import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightFEN() {
    return(
        <div className="right">
        <h1 className="nazv">Отруйний фенікс</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Вона була кинута сім'єю. Її зовнішність у всіх викликала лише огиду. Тільки він душі в ній не чув. Як щиро це виглядало! Але раптом йому знадобилося її серце для створення ліків, яке зможе врятувати її прекрасну молодшу сестру. Гостре лезо встромилося в тіло, пролилася кров. Його прощальною фразою стала: «Якби не порятунок Сюань'ер, то я не став би благати про тебе руки!» Дівчина впала в калюжу власної крові і померла, але її душа жадала помсти ... Вона відродилася і поклялася, що обов'язково змусить його заплатити.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Ісікай</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Бойові мистецтва</h3>
                            <h3 className="janrt">Бороба за владу</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Магія</h3>
                            <h3 className="janrt">Помста</h3>
                            <h3 className="janrt">Реінкарнація</h3>
                            <h3 className="janrt">Приховування особи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterfen1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterfen2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterfen3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightFEN