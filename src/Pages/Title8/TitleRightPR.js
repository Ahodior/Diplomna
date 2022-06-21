import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightPR() {
    return(
        <div className="right">
        <h1 className="nazv">Патріот Моріарті</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Кінець позаминулого століття, Британська імперія править світом, в основі якого лежить класова система. І тут з'являється Вільям Джеймс Моріарті — хлопець, який бажає знищити зло, створене класовою системою, створити ідеальну країну.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Детектив</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Псигохологія</h3>
                            <h3 className="janrt">Фантастика</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Історія</h3>
                            <h3 className="janrt">Злочинці / кримінал</h3>
                            <h3 className="janrt">Триллер</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Імперія</h3>
                            <h3 className="janrt">Антигерой</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Вогнепальна зброя</h3>
                            <h3 className="janrt">Приговування особи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterpr1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterpr2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterpr3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightPR