import React, { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";
import selfie from "../Images/selfie.png";
import logo from "../Images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ once: "true" });
  }, []);

  let [open, setOpen] = useState(true);

  const stl = {
    size: "bg-dark_like w-full h-[60px] border-2 border-red-500 mx-auto text-white md:h-[80px] sticky top-0 right-0 left-0 z-20  xxl-[1540px]",

    inner_size:
      "w-[95%] lg:w-[90%] h-full mx-auto flex justify-between items-center",

    name: "relative w-fit h-full flex ",

    span: "ml-[2%]",

    logo: "absolute top-0 lef-0 -z-10 w-full h-full object-cover",

    A_letter:
      "w-fit h-full flex justify-end items-center md:text-[75px] italic font-cursive font-semibold text-[58px]",

    rest_letters:
      "font-mono italic pl-[3px] font-bold w-full h-full flex flex-col justify-end md:leading-[28px] leading-[24px] md:text-[27px] text-[23px]",

    main_links:
      "hidden md:flex justify-evenly items-center md:w-[50%] md:h-[55px] lg:w-[45%] border-2 border-green-500  ",

    li: "w-[130px] h-full",

    li_a: "w-full h-full flex justify-center items-center font-[600] text-[20px] duration-400 hover:text-secondary hover:rounded-[8px] hover:bg-dark_like  hover:shadow-[0_9px_20px_3px_rgba(0,0,0,0.7)] hover:duration-300",

    three_bar:
      "w-[50px] flex justify-center items-center h-full border-2 border-green-700 md:hidden",

    bar: "text-[42px]",

    right_slider: `${
      open ? "translate-x-[600px]" : "translate-x-[0px]"
    } w-[50%] h-full bg-dark_like fixed right-0 top-0 z-[4] rounded-l-[25px] duration-500 md:hidden`,

    arrow_icon:
      "mt-[10px] mb-[20px] ml-[5%] text-[25px] bg-transparent rounded-[50%] hover:text-secondary hover:bg-white duration-300 hover:duration-300",

    img: "w-[140px] h-[140px] mt-[20px] mx-auto mb-[5px] rounded-full object-contain",

    profession: "text-center text-[17px] text-white font-[600]",

    li_collection: "w-full h-[25%] flex flex-col justify-between mt-[20px]",

    l_items:
      "group w-[95%] h-[45px] flex items-center justify-center rounded-r-[14px] hover:bg-gray_like hover:shadow-[10px_0_20px_5px_rgba(0,0,0,0.4)]",

    inner_li: "w-[135px] h-full flex justify-start items-center",

    l_items_a: "group-hover:text-secondary",

    l_items_icons: " text-[15px] mr-[10px] group-hover:text-secondary",

    shadow: `${
      open ? "hidden" : "block"
    } w-full h-[100vh] border-red-600 border-2 bg-transparent relative top-0 z-[2]`,
  };

  return (
    <div className={stl.size}>
      <div className={stl.inner_size}>
        <div
          className={stl.name}
          data-aos="slide-down"
          data-aos-duration="130000"
          data-aos-delay="400"
        >
          <img src={logo} alt="" className={stl.logo} />
          <div className={stl.A_letter}>
            <p>A</p>
          </div>

          <div className={stl.rest_letters}>
            <p>bdulaziz</p>
            <p className="md:mb-[5px] mb-[0]" title="Front End Developer">
              Web Developer
            </p>
          </div>
        </div>
        <ul className={stl.main_links}>
          <li
            className={stl.li}
            data-aos="fade-right"
            data-aos-duration="150000"
            data-aos-delay="600"
          >
            <a href="#home" className={stl.li_a}>
              Home
            </a>
          </li>
          <li
            className={stl.li}
            data-aos="fade-right"
            data-aos-duration="150000"
            data-aos-delay="900"
          >
            <a href="#about" className={stl.li_a}>
              About me
            </a>
          </li>
          <li
            className={stl.li}
            data-aos="fade-right"
            data-aos-duration="150000"
            data-aos-delay="1200"
          >
            <a href="#project" className={stl.li_a}>
              Project
            </a>
          </li>
          <li
            className={stl.li}
            data-aos="fade-right"
            data-aos-duration="150000"
            data-aos-delay="1500"
          >
            <a href="#contact" className={stl.li_a}>
              Contact
            </a>
          </li>
        </ul>
        <div
          data-aos="slide-down"
          data-aos-duration="130000"
          data-aos-delay="400"
          className={stl.three_bar}
        >
          <GoThreeBars className={stl.bar} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div onClick={() => setOpen(true)} className={stl.shadow}></div>
      <div className={stl.right_slider}>
        <BsArrowRightCircleFill
          onClick={() => setOpen(true)}
          className={stl.arrow_icon}
        />

        <img src={selfie} alt="My selfie" className={stl.img} />

        <div>
          <p className={stl.profession}>Front End Developer</p>
        </div>
        <ul className={stl.li_collection}>
          <li className={stl.l_items}>
            <a href="#home" className={stl.l_items_a}>
              <div className={stl.inner_li}>
                <AiFillHome className={stl.l_items_icons} />
                Home
              </div>
            </a>
          </li>

          <li className={stl.l_items}>
            <a href="#about" className={stl.l_items_a}>
              <div className={stl.inner_li}>
                <FaUser className={stl.l_items_icons} />
                About me
              </div>
            </a>
          </li>

          <li className={stl.l_items}>
            <a href="#project" className={stl.l_items_a}>
              <div className={stl.inner_li}>
                <FaProjectDiagram className={stl.l_items_icons} />
                Project
              </div>
            </a>
          </li>

          <li className={stl.l_items}>
            <a href="#contact" className={stl.l_items_a}>
              <div className={stl.inner_li}>
                <FaPhone className={stl.l_items_icons} />
                Contact
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
