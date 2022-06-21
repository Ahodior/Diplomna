import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import BZOO from '../ImagesTitle/BZOO.png'
import { Link } from "react-router-dom";

function TitleLeftBZOO() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={BZOO} alt=""/>
                    <div className="read">
                        <Link to={'/chapterbzoo1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2016</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Itagaki Paru</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Itagaki Paru</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Akita, Shoten, Viz, АСТ, Bilibili, Comics</p>
                            </div>
                            <div className="tipItem">
                                <h3>Віковий рейтинг</h3>
                                <p>18+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TitleLeftBZOO