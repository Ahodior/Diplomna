import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBZOO() {
    return(
        <div className="right">
        <h1 className="nazv"> Видатні звірі</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Головний герой — сірий вовк Леґоші, тихий і боязкий учень Черрітонської школи, що живе в гуртожитку для хижаків, також бере участь у шкільному театральному гуртку як робітник сцени. Одного разу вночі виявляється з'їденим альпак Тем, що призводить до підозр і напруги між хижаками і травоїдними учнями в школі. У той же час Легосі знайомиться з карликовою зайчихою Хару, між якими починають розвиватися складні взаємини.</p>
                        <h3>Жанри</h3>
                        <div className="janrcon">
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Трилер</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Звірята</h3>
                            <h3 className="janrt">Якудза</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Політика</h3>
                            <h3 className="janrt">Антиутопія</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Розумні раси</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterbzoo1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterbzoo2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterbzoo3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBZOO