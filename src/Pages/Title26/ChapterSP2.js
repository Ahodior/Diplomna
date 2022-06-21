import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import SP from '../ImagesTitle/SP.png'
import Header from '../../Header/Header';
function ChapterSP2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={SP} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chaptersp1'} className='chapterclic'>Назад</Link>
      <Link to={'/title26'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chaptersp3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterSP2;