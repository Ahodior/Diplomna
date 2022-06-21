import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import PRNM from '../ImagesTitle/PRNM.png'
import Header from '../../Header/Header';
function ChapterPRNM1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={PRNM} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title17'} className='chapterclic'>Назад</Link>
      <Link to={'/title17'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterprnm2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterPRNM1;