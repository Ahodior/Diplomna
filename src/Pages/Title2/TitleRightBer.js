import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightBer() {
    return(
        <div className="right">
        <h1 className="nazv"> Берсерк</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Його ім'я Ґатс, Чорний Мечник. Він могутній воїн, про якого говорять лишень пошепки. У нього є велетенський меч , рука зі заліза й шрами від незліченних боїв і тортур. А ще його плоть позначена Тавром — нечестивим символом, який притягує сили пітьми й робить Ґатса їхньою жертвою. Але Ґатс не прийме таку долю спокійно: він порубає на фарш війська проклятих, як і будь-кого, кому стане дурості стати на його шляху! Ґатс іде в товаристві ельфа Пака (більше докучайла, ніж товариша) темним і закривавленим шляхом, який приведе лише до загибелі... Чи помсти.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Драма</h3>
                            <h3 className="janrt">Героїчні фентезі</h3>
                            <h3 className="janrt">Псигохологія</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Жахіття</h3>
                            <h3 className="janrt">Фентезі</h3>
                            <h3 className="janrt">Демони</h3>
                            <h3 className="janrt">Магія</h3>
                            <h3 className="janrt">Середньовіччя</h3>
                            <h3 className="janrt">Антигерой</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Артефакти</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Помста</h3>
                            <h3 className="janrt">Чарівні істоти</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chapterber1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chapterber2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chapterber3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightBer