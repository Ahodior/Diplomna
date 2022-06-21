import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import SP from '../ImagesTitle/SP.png'
import Header from '../../Header/Header';
function ChapterSP3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={SP} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chaptersp2'} className='chapterclic'>Назад</Link>
      <Link to={'/title26'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title26'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterSP3;