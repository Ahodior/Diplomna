import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightHIS() {
    return(
        <div className="right">
        <h1 className="nazv">Їхня історія</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Мила та романтична історія Джин і Тонґ, яка розповідає про те як вони зустрілися та закохалися одна в одну.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Сьодзе</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterhis1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterhis2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterhis3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightHIS