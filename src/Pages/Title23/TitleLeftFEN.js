import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import FEN from '../ImagesTitle/FEN.png'
import { Link } from "react-router-dom";

function TitleLeftFEN() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={FEN} alt=""/>
                    <div className="read">
                        <Link to={'/chapterfen1'} className="readClic">Читати</Link>
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
                                <p>Yoolook Culture</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Yoolook Culture</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>MangaToon, AC.QQ</p>
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

export default TitleLeftFEN