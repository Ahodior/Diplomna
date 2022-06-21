import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import PRNM from '../ImagesTitle/PRNM.png'
import { Link } from "react-router-dom";

function TitleLeftPRNM() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={PRNM} alt=""/>
                    <div className="read">
                        <Link to={'/chapterprnm1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манхва</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2020</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>YC</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Rakhyun</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Naver</p>
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

export default TitleLeftPRNM