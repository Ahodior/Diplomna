import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import BLOOD from '../ImagesTitle/BLOOD.png'
import { Link } from "react-router-dom";

function TitleLeftBLOOD() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={BLOOD} alt=""/>
                    <div className="read">
                        <Link to={'/chapterblood1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манхва</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2019</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>LEE Yun Ji</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>LEE Yun Ji</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Lezhin Comics</p>
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

export default TitleLeftBLOOD