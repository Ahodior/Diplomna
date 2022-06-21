import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import BLPR from '../ImagesTitle/BLPR.png'
import { Link } from "react-router-dom";

function TitleLeftBLPR() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={BLPR} alt=""/>
                    <div className="read">
                        <Link to={'/chapterblpr1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манхва</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2022</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Manmulsang</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Manmulsang</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Manmulsang</p>
                            </div>
                            <div className="tipItem">
                                <h3>Віковий рейтинг</h3>
                                <p>16+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TitleLeftBLPR