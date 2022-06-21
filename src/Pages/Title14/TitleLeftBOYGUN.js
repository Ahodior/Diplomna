import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import BOYGUN from '../ImagesTitle/BOYGUN.png'
import { Link } from "react-router-dom";

function TitleLeftBOYGUN() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={BOYGUN} alt=""/>
                    <div className="read">
                        <Link to={'/chapterboygun1'} className="readClic">Читати</Link>
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
                                <p>Carnby</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Hong Pil</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Naver, Webtoon</p>
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

export default TitleLeftBOYGUN