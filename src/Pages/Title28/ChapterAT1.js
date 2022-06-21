import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import AT1 from '../ImagesTitle/AT1.png'
import Header from '../../Header/Header';
function ChapterAT1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={AT1} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title1'} className='chapterclic'>Назад</Link>
      <Link to={'/title1'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterat2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterAT1;