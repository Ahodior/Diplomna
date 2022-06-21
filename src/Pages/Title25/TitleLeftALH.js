import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import ALH from '../ImagesTitle/ALH.png'
import { Link } from "react-router-dom";

function TitleLeftALH() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={ALH} alt=""/>
                    <div className="read">
                        <Link to={'/chapteralh1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Маньхуа</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2017</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Ye Bei</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Kaiyuan Dongman</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>AC.QQ, Webnovel</p>
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

export default TitleLeftALH