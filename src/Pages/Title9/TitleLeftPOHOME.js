import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import POHOME from '../ImagesTitle/POHOME.png'
import { Link } from "react-router-dom";

function TitleLeftPOHOME() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={POHOME} alt=""/>
                    <div className="read">
                        <Link to={'/chapterpohome1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2013</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>UDA Nozomi</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>UDA Nozomi</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Square Enix</p>
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

export default TitleLeftPOHOME