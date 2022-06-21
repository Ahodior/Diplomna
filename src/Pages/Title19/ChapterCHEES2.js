import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import CHEES from '../ImagesTitle/CHEES.png'
import Header from '../../Header/Header';
function ChapterCHEES2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={CHEES} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterchees1'} className='chapterclic'>Назад</Link>
      <Link to={'/title19'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterchees3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterCHEES2;