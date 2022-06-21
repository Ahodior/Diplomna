import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightPOHOME() {
    return(
        <div className="right">
        <h1 className="nazv">Завжди лінивий Танака-кун</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Зітхання, спирання на свої лікті, сонні очі... Танака-кун є лінивим хлопцем і всі не проти цього. Це невимушена молодіжна комедія про Танака-куна та тихого Ооту, який не може залишити його одного.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Японія</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterpohome1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterpohome2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterpohome3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightPOHOME