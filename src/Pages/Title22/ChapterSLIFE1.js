import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import SLIFE from '../ImagesTitle/SLIFE.png'
import Header from '../../Header/Header';
function ChapterSLIFE1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={SLIFE} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title22'} className='chapterclic'>Назад</Link>
      <Link to={'/title22'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterslife2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterSLIFE1;