import React from 'react'
import avatar from '../../assets/avataaars.svg'
import  style from './StartFramework.module.css'

export default function StartFramework() {

  return <>
    <div className={`${style.home}`}>
     <div className="container">
       <div className='my-4'>
        <img src={avatar} width={"250px"} alt="avatar" />
      </div>
      <h1 className={style.headind}>start Framework</h1>
      <div>
        <span className={style.star}>
          <i className='fa-solid fa-star'></i>
        </span>
      </div>

      <div className={style.description}>
        Graphic Artist - Web Designer - Illustrator
      </div>
     </div>
    </div>
  </>
}
