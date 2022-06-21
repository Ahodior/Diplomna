import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import ROMEO from '../ImagesTitle/ROMEO.png'
import Header from '../../Header/Header';
function ChapterROMEO3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={ROMEO} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterromeo2'} className='chapterclic'>Назад</Link>
      <Link to={'/title15'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title15'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterROMEO3;