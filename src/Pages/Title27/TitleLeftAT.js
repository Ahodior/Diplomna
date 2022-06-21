import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import AT from '../ImagesTitle/AT.png'
import { Link } from "react-router-dom";

function TitleLeft() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={AT} alt=""/>
                    <div className="read">
                        <Link to={'/chapterat1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2009</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>ISAYAMA Hajime</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>ISAYAMA Hajime</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Kodansha, Азбука</p>
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

export default TitleLeft