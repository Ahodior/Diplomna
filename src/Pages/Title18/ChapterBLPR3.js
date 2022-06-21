import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import BLPR from '../ImagesTitle/BLPR.png'
import Header from '../../Header/Header';
function ChapterBLPR3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={BLPR} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterblpr2'} className='chapterclic'>Назад</Link>
      <Link to={'/title18'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title18'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBLPR3;