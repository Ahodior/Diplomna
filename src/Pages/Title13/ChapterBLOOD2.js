import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BLOOD from '../ImagesTitle/BLOOD.png'
import Header from '../../Header/Header';
function ChapterBLOOD2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={BLOOD} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterblood1'} className='chapterclic'>Назад</Link>
      <Link to={'/title13'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterblood3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBLOOD2;