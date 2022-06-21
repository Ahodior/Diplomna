import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import ONEPICE from '../ImagesTitle/ONEPICE.png'
import Header from '../../Header/Header';
function ChapterONEPICE3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={ONEPICE} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapteronepice2'} className='chapterclic'>Назад</Link>
      <Link to={'/title7'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title7'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterONEPICE3