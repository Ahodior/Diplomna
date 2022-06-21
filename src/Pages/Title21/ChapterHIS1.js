import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import HIS from '../ImagesTitle/HIS.png'
import Header from '../../Header/Header';
function ChapterHIS1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={HIS} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title21'} className='chapterclic'>Назад</Link>
      <Link to={'/title21'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterhis2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterHIS1