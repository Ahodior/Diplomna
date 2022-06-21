import React from 'react'
import './CatalogTitle.css'
import { Link } from 'react-router-dom'


import AT from '../ImagesTitle/AT.png'
import Ber from '../ImagesTitle/Ber.png'
import BL from '../ImagesTitle/BL.png'
import BZOO from '../ImagesTitle/BZOO.png'
import JOJO from '../ImagesTitle/JOJO.png'
import KILL from '../ImagesTitle/KILL.png'
import ONEPICE from '../ImagesTitle/ONEPICE.png'
import PR from '../ImagesTitle/PR.png'
import POHOME from '../ImagesTitle/POHOME.png'
import TRASH from '../ImagesTitle/TRASH.png'

import VSR from '../ImagesTitle/VSR.png'
import MYD from '../ImagesTitle/MYD.png'
import BLOOD from '../ImagesTitle/BLOOD.png'
import BOYGUN from '../ImagesTitle/BOYGUN.png'
import ROMEO from '../ImagesTitle/ROMEO.png'
import DOP from '../ImagesTitle/DOP.png'
import PRNM from '../ImagesTitle/PRNM.png'
import BLPR from '../ImagesTitle/BLPR.png'
import CHEES from '../ImagesTitle/CHEES.png'
import WAIFU from '../ImagesTitle/WAIFU.png'

import HIS from '../ImagesTitle/HIS.png'
import SLIFE from '../ImagesTitle/SLIFE.png'
import ALH from '../ImagesTitle/ALH.png'
import DARK from '../ImagesTitle/DARK.png'
import FEN from '../ImagesTitle/FEN.png'
import GODREV from '../ImagesTitle/GODREV.png'
import MTD from '../ImagesTitle/MTD.png'
import SM from '../ImagesTitle/SM.png'
import SP from '../ImagesTitle/SP.png'
import WARPR from '../ImagesTitle/WARPR.png'


const CatalogTitle = () => {
  return (
     <div className='catalog'>
        <div className='catalogCon'>
        <h1 className='Catalog1'>КАТАЛОГ</h1>
            <div className='catalogtitle'>
                <Link to={'/title1'} class="catalogtitle">
                    <img class="catalogImg" src={AT} alt="Атака тинанів"/>
                    <h3 className='text'>Атака тинанів</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title2'} class="catalogtitle">
                    <img class="catalogImg" src={Ber} alt="<Берсерк>"/>
                    <h3 className='text'>Берсерк</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title3'} class="catalogtitle">
                    <img class="catalogImg" src={BL} alt="<Чорна конюшина>"/>
                    <h3>Чорна конюшина</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title4'} class="catalogtitle">
                    <img class="catalogImg" src={BZOO} alt="<Видатні звірі>"/>
                    <h3 className='text'>Видатні звірік</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title5'} class="catalogtitle">
                    <img class="catalogImg" src={JOJO} alt="<Видатні звірі>"/>
                    <h3 className='text'>Неймовірні пригоди ДжоДжо</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title6'} class="catalogtitle">
                    <img class="catalogImg" src={KILL} alt="<Видатні звірі>"/>
                    <h3 className='text'>Клас Убивць</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title7'} class="catalogtitle">
                    <img class="catalogImg" src={ONEPICE} alt="<Видатні звірі>"/>
                    <h3 className='text'>Великий куш / Ван Піс</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title8'} class="catalogtitle">
                    <img class="catalogImg" src={PR} alt="<Видатні звірі>"/>
                    <h3 className='text'>Патріот Моріарті</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title9'} class="catalogtitle">
                    <img class="catalogImg" src={POHOME} alt="<Видатні звірі>"/>
                    <h3 className='text'>Завжди лінивий Танака-кун</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title10'} class="catalogtitle">
                    <img class="catalogImg" src={TRASH} alt="<Видатні звірі>"/>
                    <h3 className='text'>Як ви називаєте це сміття?</h3>
                    <p>Манга</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title11'} class="catalogtitle">
                    <img class="catalogImg" src={VSR} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Всевидючий читач</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title12'} class="catalogtitle">
                    <img class="catalogImg" src={MYD} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Моя доля — стати рятівницею головного героя</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title13'} class="catalogtitle">
                    <img class="catalogImg" src={BLOOD} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Кров пані Жизель</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title14'} class="catalogtitle">
                    <img class="catalogImg" src={BOYGUN} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Хлопчик із рушницею</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title15'} class="catalogtitle">
                    <img class="catalogImg" src={ROMEO} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Ромео, Виходь!</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title16'} class="catalogtitle">
                    <img class="catalogImg" src={DOP} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Щоб допомогти тобі зрозуміти</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title17'} class="catalogtitle">
                    <img class="catalogImg" src={PRNM} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Природжений найманець</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title18'} class="catalogtitle">
                    <img class="catalogImg" src={BLPR} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Більше ніякого принца!</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title19'} class="catalogtitle">
                    <img class="catalogImg" src={CHEES} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Сир у мишоловці</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title20'} class="catalogtitle">
                    <img class="catalogImg" src={WAIFU} alt="<Всевидючий читач>"/>
                    <h3 className='text'>Я стала дружиною головного героя</h3>
                    <p>Манхва</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title21'} class="catalogtitle">
                    <img class="catalogImg" src={HIS} alt=""/>
                    <h3 className='text'>Їхня історія</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title22'} class="catalogtitle">
                    <img class="catalogImg" src={SLIFE} alt=""/>
                    <h3 className='text'>Солодке життя Аделаїди</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title23'} class="catalogtitle">
                    <img class="catalogImg" src={FEN} alt=""/>
                    <h3 className='text'>Отруйний фенікс</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title24'} class="catalogtitle">
                    <img class="catalogImg" src={WARPR} alt=""/>
                    <h3 className='text'>Війна принцес</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title25'} class="catalogtitle">
                    <img class="catalogImg" src={ALH} alt=""/>
                    <h3 className='text'>Неперевершений алхімік</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title26'} class="catalogtitle">
                    <img class="catalogImg" src={SP} alt=""/>
                    <h3 className='text'>У мого ворога - суперсила!</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title27'} class="catalogtitle">
                    <img class="catalogImg" src={MTD} alt=""/>
                    <h3 className='text'>Меган та Даная</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title28'} class="catalogtitle">
                    <img class="catalogImg" src={DARK} alt=""/>
                    <h3 className='text'>Засновник темного Шляху</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title29'} class="catalogtitle">
                    <img class="catalogImg" src={GODREV} alt=""/>
                    <h3 className='text'>Богиня ревнощів</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
            <div className='catalogtitle'>
                <Link to={'/title30'} class="catalogtitle">
                    <img class="catalogImg" src={SM} alt=""/>
                    <h3 className='text'>Сьогодні я маю (змушу тебе) зізнатись</h3>
                    <p>Маньхуа</p>
                 </Link>
            </div>
        </div>
     </div>
  )
}

export default CatalogTitle;