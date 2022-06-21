import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import ONEPICE from '../ImagesTitle/ONEPICE.png'
import { Link } from "react-router-dom";

function TitleLeftONEPICE() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={ONEPICE} alt=""/>
                    <div className="read">
                        <Link to={'/chapteronepice1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Манга</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>1997</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>ODA Eiichiro</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>ODA Eiichiro</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>Shueisha, Азбука, Эксмо, Viz, Lezhin, Comics, Shueisha</p>
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

export default TitleLeftONEPICE