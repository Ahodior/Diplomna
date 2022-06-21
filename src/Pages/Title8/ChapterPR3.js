import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import PR from '../ImagesTitle/PR.png'
import Header from '../../Header/Header';
function ChapterPR3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={PR} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterpr2'} className='chapterclic'>Назад</Link>
      <Link to={'/title8'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title8'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterPR3;