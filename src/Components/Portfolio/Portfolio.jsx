import React, { useState } from 'react'
import style from './Portfolio.module.css'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

let allImages = [img1, img2, img3 , img1, img3, img2];
export default function Portfolio() {

  const [model , setModel] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function handleModel(e) {
    if (e.target.tagName !== 'IMG') {
      setModel(false);
    }
  }

  return <>
        <div className={style.portfolio}>
          <div>
            <h1 className={style.headind}>portfolio component</h1>
          <div>
            <span className={style.star}>
              <i className='fa-solid fa-star'></i>
            </span>
          </div>
          </div>
          <div className="container">
            <div className="row my-1 g-5">
              {allImages.map((item,index) =><div key={index} className="col-md-4">
                <div onClick={()=>{setModel(true) , setCurrentImage(item)}} className={style.box_img} key={index}>
                  <img src={item} className={style.img} alt="portfolio1"/>
                  <div className={style.layer}>
                    <i className={`${style.plus} fa-solid fa-plus`}></i>
                  </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
        
        {model ? <div onClick={(e)=>{handleModel(e)}} className={`${style.model} position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center`}>
          <img src={currentImage} width={'40%'} alt='image' />
        </div> : ''};

  </>
}
