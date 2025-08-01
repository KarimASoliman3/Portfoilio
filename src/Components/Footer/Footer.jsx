import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>
    <div className={`${style.footer} text-white`}>
      <div className="container">
      <div className='row gy-4'>
        <div className="col-md-4">
          <div>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h3 className='mb-3'>AROUND THE WEB</h3>
            <div className='d-flex justify-content-center gap-3'>
              <i className={`${style.icon_circle} fa-brands fa-facebook`}></i>
              <i className={`${style.icon_circle} fa-brands fa-twitter`}></i>
              <i className={`${style.icon_circle} fa-brands fa-linkedin-in`}></i>
              <i className={`${style.icon_circle} fa-solid fa-globe`}></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

    </div>
    </div>


    <div className={`${style.mini_footer} text-center text-white py-3`}>
      <p style={{fontWeight:600}}>&copy; 2025 KarimASoliman3. All rights reserved.</p>
    </div>
  </>
}
