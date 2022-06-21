import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BOYGUN from '../ImagesTitle/BOYGUN.png'
import Header from '../../Header/Header';
function ChapterBOYGUN1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={BOYGUN} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title14'} className='chapterclic'>Назад</Link>
      <Link to={'/title14'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterboygun2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBOYGUN1;