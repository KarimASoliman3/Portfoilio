import React from 'react'
import style from './NotFoundPage.module.css'
import img from '../../assets/1_YWUpnY_zNbSfK62GSJIBbw.png'

export default function NotFoundPage() {
  return <>

      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="row">
          <div className="error py-5">
            <div>
              <img src={img} style={{width:600 , marginTop:20}} alt="" />
            </div>
          </div>
        </div>
      </div>

  </>
}
