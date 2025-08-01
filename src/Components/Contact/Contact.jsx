import React from "react";
import style from "./Contact.module.css";
import Input from "../Input/Input";
export default function Contact() {
  return (
    <>
      <div className={`${style.contact} py-5`}>
        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <div>
            <h1 className={style.headind}>conatct section</h1>
            <div>
              <span className={style.star}>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
          </div>

          <form className="w-50">
            <Input type={"text"} label={"userName"} id={"userName"} />
            <Input type={"number"} label={"Age"} id={"age"} />
            <Input type={"email"} label={"Email"} id={"email"} />
            <Input type={"password"} label={"Password"} id={"password"} />

            <div className="mt-2">
              <button type="submit" className={style.button}>
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
