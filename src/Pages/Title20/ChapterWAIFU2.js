import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import WAIFU from '../ImagesTitle/WAIFU.png'
import Header from '../../Header/Header';
function ChapterWAIFU2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={WAIFU} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterwaifu1'} className='chapterclic'>Назад</Link>
      <Link to={'/title20'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterwaifu3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterWAIFU2;