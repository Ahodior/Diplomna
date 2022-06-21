import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import KILL from '../ImagesTitle/KILL.png'
import { Link } from "react-router-dom";

function TitleLeftKILL() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={KILL} alt=""/>
                    <div className="read">
                        <Link to={'/chapterkill1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2012</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>MATSUI Yuusei</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>MATSUI Yuusei</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Shueisha, Viz</p>
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

export default TitleLeftKILL