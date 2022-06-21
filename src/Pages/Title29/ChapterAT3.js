import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import AT3 from '../ImagesTitle/AT3.png'
import Header from '../../Header/Header';
function ChapterAT3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={AT3} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterat2'} className='chapterclic'>Назад</Link>
      <Link to={'/title1'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title1'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterAT3;