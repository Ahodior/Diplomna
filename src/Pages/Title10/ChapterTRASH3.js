import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import TRASH from '../ImagesTitle/TRASH.png'
import Header from '../../Header/Header';
function ChapterTRASH3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={TRASH} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chaptertrash2'} className='chapterclic'>Назад</Link>
      <Link to={'/title10'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title10'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterTRASH3;