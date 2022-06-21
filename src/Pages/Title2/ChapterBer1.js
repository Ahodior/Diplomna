import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import Ber from '../ImagesTitle/Ber.png'
import Header from '../../Header/Header';
function ChapterBer1() {
  return (
    <div className='chapter'>
      <Header/>

    <div>
        <img className="chapterimg" src={Ber} alt=""/>
    </div>
      <div className='chaptercon'>
      <Link to={'/title2'} className='chapterclic'>Назад</Link>
      <Link to={'/title2'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterber2'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterBer1;