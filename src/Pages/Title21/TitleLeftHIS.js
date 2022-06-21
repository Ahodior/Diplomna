import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import HIS from '../ImagesTitle/HIS.png'
import { Link } from "react-router-dom";

function TitleLeftHIS() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={HIS} alt=""/>
                    <div className="read">
                        <Link to={'/chapterhis1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Маньхуа</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2014</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Tan Jiu</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Tan Jiu</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Weibo</p>
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

export default TitleLeftHIS