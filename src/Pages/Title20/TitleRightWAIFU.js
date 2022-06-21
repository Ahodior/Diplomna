import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightWAIFU() {
    return(
        <div className="right">
        <h1 className="nazv">Я стала дружиною головного героя</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Я потрапила у тіло головної злодійки, що приречена на смерть і вічні страждання душі. Її сім’я знущалась з неї лишень тому, що вона була позашлюбною дочкою графа.
І ось, перемістившись в тіло задовго до початку роману, мене відправили на війну. На щастя, я стану геніальним магом. Переживши основну навалу монстрів, я зіткнулась із головним героєм.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьодзе</h3>
                            <h3 className="janrt">Ісікай</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Реінкарнація</h3>
                            <h3 className="janrt">Чарівники / маги</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterwaifu1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterwaifu2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterwaifu3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightWAIFU