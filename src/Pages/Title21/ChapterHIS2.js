import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import HIS from '../ImagesTitle/HIS.png'
import Header from '../../Header/Header';
function ChapterHIS2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={HIS} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterhis1'} className='chapterclic'>Назад</Link>
      <Link to={'/title21'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterhis3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterHIS2