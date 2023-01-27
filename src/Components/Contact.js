import React, { useState, useEffect } from "react";
import vector from "../Images/contactimage.png";
import { FiLinkedin } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

function Contact() {
  const [copySuccessMessage, setCopySuccessMessage] = useState("");
  const email = "abdulaziztojibayev6@gmail.com";

  const [hide, setHide] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage("");
      setHide(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copySuccessMessage]);

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage("Copied");
    if (hide === true) {
      setHide(false);
    }
  }

  let stl = {
    size: "relative w-[95%] h-fit flex flex-col my-[50px] mx-auto text-white font-[700] rounded-[20px] md:w-[90%] md:flex-row md:my-[8%] ",

    chat: "w-full h-fit flex flex-col justify-around items-center text-dark_like rounded-t-[20px] py-[10%] md:py-[5%] md:w-[50%] md:h-[500px] lg:h-[650px] md:rounded-t-[0px] md:rounded-l-[20px] bg-white ",

    header: "text-center text-[25px] md:text-[35px] lg:text-[45px]",
    btn: "w-[120px] h-[40px] my-[25px] tracking-[2px] font-[500] bg-dark_like text-white text-[14px] hover:text-secondary hover:duration-500",
    vector_Img: "w-[60%] h-[60%]",
    img_self: "w-full h-full object-contain",

    contact:
      "relative w-full h-fit flex flex-col items-end rounded-b-[20px] py-[10%] md:w-[50%] md:h-[500px] lg:h-[650px] md:py-[5%] bg-dark_like md:rounded-b-[0px] md:rounded-r-[20px] border-[5px] border-white pr-[40px] lg:pr-[60px]",

    h1: "text-[35px] relative md:text-[40px] lg:text-[80px] tracking-[2px] md:tracking-[3px]",
    line: "w-[50px] h-[2px] bg-white absolute right-[55px] top-[50%] md:w-[70px] md:right-[70px] lg:right-[130px] lg:w-[140px]",
    soc_media:
      "flex flex-wrap justify-around items-center w-[90%] h-fit py-[3%] bg-transparent mt-[50px] ",
    sm1: "flex flex-col justify-center items-center w-[65px] h-[65px] mb-[15px] rounded-[22px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] text-[50px] md:text-[60px] hover:animate-bounce",

    yCircle:
      "w-[12px] h-[12px] md:h-[40px] md:w-[40px] bg-yellow-500 absolute top-[10px] left-[10px] rounded-full",

    oCircle:
      "w-[12px] h-[12px] md:h-[40px] md:w-[40px] bg-orange-500 absolute bottom-[30px] right-[120px] md:bottom-[50px] md:rounded-[10px] rotate-45 rounded-0",

    gCircle:
      "w-[12px] h-[12px] md:h-[20px] md:w-[20px] lg:h-[40px] lg:w-[40px] bg-gray-400 absolute top-[110px] right-[10px] md:bottom-[50px] md:rounded-full",
  };

  return (
    <div className={stl.size} id="contact">
      <div className={stl.chat}>
        <h1 className={stl.header}>Let's have a quick chat</h1>
        <button className={stl.btn}>
          <p>{copySuccessMessage}</p>
          {hide ? <p onClick={copyEmail}>Copy Email</p> : ""}
        </button>
        <div className={stl.vector_Img}>
          <img src={vector} alt="vector_contact" className={stl.img_self} />
        </div>
      </div>

      <div className={stl.contact}>
        <div className={stl.yCircle}></div>
        <div className={stl.oCircle}></div>
        <div className={stl.gCircle}></div>
        <h1 className={stl.h1}>Contact</h1>

        <h1 className={stl.h1}>
          <div className={stl.line}></div> Me
        </h1>

        <div className={stl.soc_media}>
          <a href="tel:+998913676921">
            <button className={stl.sm1} style={{ background: "green" }}>
              <AiFillPhone className="animate-wiggle " />
            </button>
          </a>

          <button className={stl.sm1} style={{ background: "white" }}>
            <BsTelegram className="text-[#239AD5] lg:text-[85px] md:text-[65px] text-[50px]" />
          </button>

          <a href="https://www.linkedin.com/in/abdulaziz-tojibayev-4350b9254/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BTh84lZ6R3ypOYJ%2Blx7jZg%3D%3D">
            <button
              className={stl.sm1}
              style={{ background: "transparent", border: "2px solid white" }}
            >
              <FiLinkedin />
            </button>
          </a>

          <button className={stl.sm1} style={{ background: "#586AEA" }}>
            <FaDiscord className="text-white lg:text-[85px] md:text-[65px] text-[50px]" />
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Contact;
