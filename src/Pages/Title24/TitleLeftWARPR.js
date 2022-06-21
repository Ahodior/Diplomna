import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import WARPR from '../ImagesTitle/WARPR.png'
import { Link } from "react-router-dom";

function TitleLeftWARPR() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={WARPR} alt=""/>
                    <div className="read">
                        <Link to={'/chapterwarpr1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Маньхуа</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2020</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Hu Jing</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Luo Jie</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>ManmanAPP Tapas, Media, Pocket Comics</p>
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

export default TitleLeftWARPR