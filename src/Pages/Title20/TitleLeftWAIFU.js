import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import WAIFU from '../ImagesTitle/WAIFU.png'
import { Link } from "react-router-dom";

function TitleLeftWAIFU() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={WAIFU} alt=""/>
                    <div className="read">
                        <Link to={'/chapterwaifu1'} className="readClic">Читати</Link>
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
                                <p>Pulig, gyeoul-ip</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>jeogbal</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Daon Creative, Kakao</p>
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

export default TitleLeftWAIFU