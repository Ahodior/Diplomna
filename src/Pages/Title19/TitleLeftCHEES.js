import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import CHEES from '../ImagesTitle/CHEES.png'
import { Link } from "react-router-dom";

function TitleLeftCHEES() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={CHEES} alt=""/>
                    <div className="read">
                        <Link to={'/chapterchees1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манхва</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2010</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Soon Kki</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Soon Kki</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Naver, Webtoon</p>
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

export default TitleLeftCHEES