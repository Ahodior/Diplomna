import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import DOP from '../ImagesTitle/DOP.png'
import Header from '../../Header/Header';
function ChapterDOP2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={DOP} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterdop1'} className='chapterclic'>Назад</Link>
      <Link to={'/title16'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterdop3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterDOP2;