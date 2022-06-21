import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import ALH from '../ImagesTitle/ALH.png'
import Header from '../../Header/Header';
function ChapterALH1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={ALH} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title25'} className='chapterclic'>Назад</Link>
      <Link to={'/title25'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapteralh2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterALH1;