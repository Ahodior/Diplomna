import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import POHOME from '../ImagesTitle/POHOME.png'
import Header from '../../Header/Header';
function ChapterPOHOME2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={POHOME} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterpohome1'} className='chapterclic'>Назад</Link>
      <Link to={'/title9'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterpohome3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterPOHOME2;