import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BL from '../ImagesTitle/BL.png'
import Header from '../../Header/Header';
function ChapterBL3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={BL} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterbl2'} className='chapterclic'>Назад</Link>
      <Link to={'/title3'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBL3;