import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBOYGUN() {
    return(
        <div className="right">
        <h1 className="nazv">Хлопчик із рушницею</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Хлопчик на ім'я Хан Ґю-Хван, який не мав іншого вибору, крім як перетворитися зі слабака на героя… І дробовик, який перетворив цього хлопчика на героя…</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Детектив</h3>
                            <h3 className="janrt">Містика</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Триллер</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">Психологія</h3>
                            <h3 className="janrt">Жахіття</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Монстри</h3>
                            <h3 className="janrt">Апокаліпсис</h3>
                            <h3 className="janrt">Вогнепальна зброя</h3>
                            <h3 className="janrt">Антигерой</h3>
                            <h3 className="janrt">Виживання</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterboygun1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterboygun2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterboygun3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBOYGUN