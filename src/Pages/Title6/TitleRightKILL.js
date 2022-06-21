import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRight() {
    return(
        <div className="right">
        <h1 className="nazv"> Клас Убивць</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Історія розповідає про клас 3-E середньої школи Кунуґіґаока, де щоранку вони вітають свого сенсея вогняним залпом. Коро-сенсей — це дивна комбінація іншопланетянина та восьминога, що рухається зі швидкістю, яка у 20 разів більша швидкості звуку. Виявляється, ця істота відповідальна за знищення Місяця, перетворивши його назавжди у форму півмісяця. Він оголосив, що знищить світ за 1 рік. Сенсей навчить клас 3-E, як вбити його до закінчення року.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Комелія</h3>
                            <h3 className="janrt">Наукова фантастика</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Фантастика</h3>
                            <h3 className="janrt">Школа</h3>
                            <h3 className="janrt">Повсякденність</h3>
                            <h3 className="janrt">Трагедія</h3>
                            <h3 className="janrt">Військові</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Найманці</h3>
                            <h3 className="janrt">Вогнепальна зброя</h3>
                            <h3 className="janrt">Вчитель / учень</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Японія</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterkill1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterkill2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterkill3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRight