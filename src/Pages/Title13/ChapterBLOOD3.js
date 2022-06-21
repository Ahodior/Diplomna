import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BLOOD from '../ImagesTitle/BLOOD.png'
import Header from '../../Header/Header';
function ChapterBLOOD3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={BLOOD} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterblood2'} className='chapterclic'>Назад</Link>
      <Link to={'/title13'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title13'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBLOOD3;