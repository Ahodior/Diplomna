import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightPRNM() {
    return(
        <div className="right">
        <h1 className="nazv">Природжений найманець</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Ю Ічжин колись виявився єдиним, хто вижив в авіакатастрофі. Щоб заробити життя, він став найманцем. Через 10 років він повернувся до своєї родини до рідного міста. Чи зможе він забути своє минуле та жити життям звичайного школяра?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Військові</h3>
                            <h3 className="janrt">Найманці</h3>
                            <h3 className="janrt">Мафія</h3>
                            <h3 className="janrt">Армія</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Вогнепальна зброя</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterprnm1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterprnm2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterprnm3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightPRNM