import React, { useState } from "react";
// import style from './Input.module.css'
export default function Input({ type, label, id }) {

  const [inputValue , setInputValue] = useState('')
  console.log(inputValue)

  return (
    <>

      <div className="container d-flex justify-content-center">
        <div className="w-100">
          <div className="d-flex flex-column align-items-start mb-1">
            <label htmlFor={label} className={`${inputValue==''?'move_label':''} transition color_label text-black mt-4 `}>
              {label}
            </label>
            <input
              onChange={(e)=>{setInputValue(e.target.value)}}
              type={type}
              className="w-100 ps-0 z-2 custom-input"
              id={id}
              placeholder={label}
            />
          </div>
        </div>
      </div>
    </>
  );
}
