import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import PRNM from '../ImagesTitle/PRNM.png'
import Header from '../../Header/Header';
function ChapterPRNM3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={PRNM} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterprnm2'} className='chapterclic'>Назад</Link>
      <Link to={'/title17'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title17'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterPRNM3;