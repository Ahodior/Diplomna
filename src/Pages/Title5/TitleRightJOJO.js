import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightJOJO() {
    return(
        <div className="right">
        <h1 className="nazv"> Неймовірні пригоди ДжоДжо</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>У провінційному японському містечку Моріо ніколи не відбувалося ніяких видатних подій до тих пір, поки доля не приносить до нього лук та стрілу, здатні пробудити станд. Дивні події відбуваються одне за одним. Та на їх тлі губляться повідомлення про зникнення молодих дівчат. Та загадковому маніаку не довго залишилось ходити на свободі, адже на сторожі міста стоїть компанія Джоске Хігашікати, позашлюбного сина Джозефа, незламного, як діамант.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Вампіри</h3>
                            <h3 className="janrt">Бойові мистестца</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Містика</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Надприродне</h3>
                            <h3 className="janrt">Трелер</h3>
                            <h3 className="janrt">Жахіття</h3>
                            <h3 className="janrt">Супер сила</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">Зомбі</h3>
                            <h3 className="janrt">Бої на мечах</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Нежить</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Спортивне тіло</h3>
                            <h3 className="janrt">Артефекти</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterjojo1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterjojo2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterjojo3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightJOJO