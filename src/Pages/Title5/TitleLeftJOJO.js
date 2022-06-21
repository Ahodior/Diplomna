import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import JOJO from '../ImagesTitle/JOJO.png'
import { Link } from "react-router-dom";

function TitleLeftJOJO() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={JOJO} alt=""/>
                    <div className="read">
                        <Link to={'/chapterjojo1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>1986</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>ARAKI Hirohiko</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>ARAKI Hirohiko</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Shueisha, Viz, Tong, Li, Bilibili, Comics, Star, Comics</p>
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

export default TitleLeftJOJO