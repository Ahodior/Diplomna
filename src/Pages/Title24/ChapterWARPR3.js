import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import WARPR from '../ImagesTitle/WARPR.png'
import Header from '../../Header/Header';
function ChapterWARPR3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={WARPR} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterwarpr2'} className='chapterclic'>Назад</Link>
      <Link to={'/title24'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title24'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterWARPR3;