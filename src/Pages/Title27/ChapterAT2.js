import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import AT2 from '../ImagesTitle/AT2.png'
import Header from '../../Header/Header';
function ChapterAT2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={AT2} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterat1'} className='chapterclic'>Назад</Link>
      <Link to={'/title1'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterat3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterAT2;