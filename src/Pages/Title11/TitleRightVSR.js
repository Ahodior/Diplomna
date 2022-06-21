import React from "react";
import { Link } from "react-router-dom";
import '../Title.css'
import '../TitleRight.css'

function TitleRightVSR() {
    return(
        <div className="right">
        <h1 className="nazv">Всевидючий читач</h1>
            <div className="righttConteiner">
                <div className="roz">
                    <div className="conItem">
                        <h3>Опис</h3>
                        <p>Докча був звичайним офісним працівником, єдиним інтересом якого було читання новели «Три способи вижити після кінця світу». Але коли роман раптом стає реальністю, він єдина людина, яка знає, як закінчиться світ. Озброївшись цим знанням, Докча використовує його, щоб змінити хід історії та світ, яким він його знає.</p>
                         <h3>Жанри</h3>
                         <div className="janrcon">
                            <h3 className="janrt">Бойовик</h3>
                            <h3 className="janrt">Постапокаліптика</h3>
                            <h3 className="janrt">Пригоди</h3>
                            <h3 className="janrt">Фантастика</h3>
                            <h3 className="janrt">Сьонен</h3>
                            <h3 className="janrt">Ісекай</h3>
                            <h3 className="janrt">Демони</h3>
                            <h3 className="janrt">Боги</h3>
                            <h3 className="janrt">Виживання</h3>
                            <h3 className="janrt">Монтстри</h3>
                            <h3 className="janrt">Виживання</h3>
                            <h3 className="janrt">Артефакти</h3>
                            <h3 className="janrt">ГГ чоловік</h3>
                            <h3 className="janrt">Апокаліпсіс</h3>
                            <h3 className="janrt">Жорстокий світ</h3>
                            <h3 className="janrt">Дракони</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                            <h3 className="janrt">Холодна зброя</h3>
                            <h3 className="janrt">Квести</h3>
                            <h3 className="janrt">Амнезія</h3>
                            <h3 className="janrt">Дружба</h3>
                            <h3 className="janrt">Ігрові елементи</h3>
                            <h3 className="janrt">Підземелья</h3>
                            <h3 className="janrt">Порятунок світу</h3>
                            <h3 className="janrt">Подорожі у часі</h3>
                            <h3 className="janrt">Приховування особи</h3>
                        </div>
                    </div>

                    <div className="glavi">
                        <Link to={'/chaptervsr1'} className="glaviClic">Том 1⠀⠀⠀Розділ 1</Link>
                        <Link to={'/chaptervsr2'} className="glaviClic">Том 1⠀⠀⠀Розділ 2</Link>
                        <Link to={'/chaptervsr3'} className="glaviClic">Том 1⠀⠀⠀Розділ 3</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleRightVSR