import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import ALH from '../ImagesTitle/ALH.png'
import Header from '../../Header/Header';
function ChapterALH2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={ALH} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapteralh1'} className='chapterclic'>Назад</Link>
      <Link to={'/title25'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapteralh3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterALH2;