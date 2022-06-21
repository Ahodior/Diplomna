import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import ROMEO from '../ImagesTitle/ROMEO.png'
import { Link } from "react-router-dom";

function TitleLeftROMEO() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={ROMEO} alt=""/>
                    <div className="read">
                        <Link to={'/chapterromeo1'} className="readClic">Читати</Link>
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
                                <p>Yang Hye Suk</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Bak Hyein</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Daum, Piccoma, Tapas Media, Kakao, Daon Creative</p>
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

export default TitleLeftROMEO