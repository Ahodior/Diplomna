import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightTRASH() {
    return(
        <div className="right">
        <h1 className="nazv"> Як ви називаєте це сміття?</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Юу-кун - головний герой, який закоханий у колишню дівчину свого брата. Але дівчина трохи дивна. Вона ніяк не може забути про брата головного героя, тому в обмін на те, що Акіра(ім'я дівчини) зможе стежити за братом, він просить невеликі дрібнички, як от потриматися за руки. Однак, чи правильно це?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Психологія</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Дружба</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chaptertrash1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chaptertrash2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chaptertrash3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightTRASH