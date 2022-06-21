import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightCHEES() {
    return(
        <div className="right">
        <h1 className="nazv">Сир у мишоловці</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Повернувшись до коледжу після річної перерви, Хон Соль зустрічає підозріло ідеального хлопця на ім’я Ю Чжон. Відтоді її життя змінилося на гірше, і Соль була впевнена, що це все завдяки Ю Чону. Так чому ж він раптом став таким дружнім до неї через рік?</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Психологія</h3>
                            <h3 className="janrt">Романтика</h3>
                            <h3 className="janrt">ГГ жінка</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Проховування особи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterchees1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterchees2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterchees3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightCHEES