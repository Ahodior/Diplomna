import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BZOO from '../ImagesTitle/BZOO.png'
import Header from '../../Header/Header';
function ChapterBZOO2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={BZOO} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterbzoo1'} className='chapterclic'>Назад</Link>
      <Link to={'/title4'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterbzoo3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBZOO2