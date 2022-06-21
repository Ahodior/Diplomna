import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import DOP from '../ImagesTitle/DOP.png'
import { Link } from "react-router-dom";

function TitleLeftDOP() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={DOP} alt=""/>
                    <div className="read">
                        <Link to={'/chapterdop1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манхва</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2021</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>LEE BORA, Ranyong</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Osyeon</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Kakao Tapas, Media, Podoteng</p>
                            </div>
                            <div className="tipItem">
                                <h3>Віковий рейтинг</h3>
                                <p>Немає</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TitleLeftDOP