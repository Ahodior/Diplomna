import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import TRASH from '../ImagesTitle/TRASH.png'
import { Link } from "react-router-dom";

function TitleLeftTRASH() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={TRASH} alt=""/>
                    <div className="read">
                        <Link to={'/chaptertrash1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2022</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Mada Tetsukazu</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Mada Tetsukazu</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Enterbrain</p>
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

export default TitleLeftTRASH