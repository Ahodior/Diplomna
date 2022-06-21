import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import VSR from '../ImagesTitle/VSR.png'
import Header from '../../Header/Header';
function ChapterVSR3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={VSR} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chaptervsr2'} className='chapterclic'>Назад</Link>
      <Link to={'/title11'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title11'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterVSR3;