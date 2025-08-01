import React from 'react'
import style from './About.module.css'

export default function About() {
  return <>
      <div className={style.about}>
        <h1 className={style.headind}>about component</h1>
        <div>
          <span className={style.star}>
            <i className='fa-solid fa-star'></i>
          </span>
        </div>
        <div className="container my-3">
          <div className="row px-4">
            <div className="col-md-6">
              <div className={style.description}>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={style.description}>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}
