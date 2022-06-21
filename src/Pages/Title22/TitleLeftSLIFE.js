import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import SLIFE from '../ImagesTitle/SLIFE.png'
import { Link } from "react-router-dom";

function TitleLeftSLIFE() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={SLIFE} alt=""/>
                    <div className="read">
                        <Link to={'/chapterslife1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Маньхуа</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2018</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Chae Ha Bin</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Li Su Ho</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>D{'&'}C Media, Kakao</p>
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

export default TitleLeftSLIFE