import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightROMEO() {
    return(
        <div className="right">
        <h1 className="nazv">Ромео, Виходь!</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Ох Ромео, Ромео! Де ти, Ромео? Серйозно, де він, чорт його побери?! Усамітнений у своєму особняку, Ромео та його блискучий розум смикають нитки влади, розгадуючи сюжети та таємниці міста. Його вірні слуги ретельно оберігають його таємниці, але коли в домівку входить хтось новий, вони починають сумніватися в цій самоізоляції.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                            <h3 className="janrt">Бої на мечах</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Лицарі</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterromeo1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterromeo2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterromeo3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightROMEO