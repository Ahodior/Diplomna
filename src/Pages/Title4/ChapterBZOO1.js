import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BZOO from '../ImagesTitle/BZOO.png'
import Header from '../../Header/Header';
function ChapterBZOO1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={BZOO} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title4'} className='chapterclic'>Назад</Link>
      <Link to={'/title4'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterbzoo2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBZOO1