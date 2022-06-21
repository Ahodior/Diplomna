import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightMYD() {
    return(
        <div className="right">
        <h1 className="nazv">Моя доля — стати рятівницею головного героя</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>У мене в голові виникнули спогади про те, як у минулому житті батько катував мене експериментами. І я зрозуміла, що народилася другорядним персонажем, який помер ще до початку розвитку дій роману жанру “фентезі”, яку прочитала у минулому житті.
Аріадна спокійно подумала. Це провал. Провал трапився ще навіть за облаштування цього світу.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Сьодзьо</h3>
                            <h3 className="janrt">Ісекай</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Фантастика</h3>
                            <h3 className="janrt">Пригоди</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chaptermyd1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chaptermyd2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chaptermyd3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightMYD