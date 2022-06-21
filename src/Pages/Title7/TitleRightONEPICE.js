import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightONEPICE() {
    return(
        <div className="right">
        <h1 className="nazv">Великий куш / Ван Піс</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Дія «One Piece» відбувається у світі у час «Ери Піратів». Подія, що стала точкою відліку ери — страта «Короля Піратів», Ґолд Роджера. Коли Роджеру було надано право останнього слова, він оголосив, що сховав всі свої скарби в одному місці. Після цього тисячі людей вирушили на пошуки скарбу, названого One Piece. Через двадцять два роки після страти Роджера головний герой «One Piece», Монкі Д. Луффі, вирушає у плавання з метою стати новим «Королем Піратів». Для цього йому, по-перше, потрібна відмінна команда, а по-друге — треба знайти One Piece. Ймовірне місце знаходження «One Piece» — Рафтель, останній з островів океанічної течії Ґранд Лайн. Єдині, хто доплив до нього, — Ґолд Роджер і його команда.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Комедія</h3>
                            <h3 className="janrt">Надприродне</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Бойові мистецтва</h3>
                            <h3 className="janrt">Бої на мечах</h3>
                            <h3 className="janrt">Чарівні істоти</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Звірята</h3>
                            <h3 className="janrt">Вогнепальна зброя</h3>
                            <h3 className="janrt">Розумні раси</h3>
                            <h3 className="janrt">Самураї</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Пірати</h3>
                            <h3 className="janrt">Борьба за владу</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Ніндзя</h3>
                            <h3 className="janrt">Війна</h3>
                            <h3 className="janrt">Дракони</h3>
                            <h3 className="janrt">Монстри</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapteronepice1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapteronepice2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapteronepice3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightONEPICE