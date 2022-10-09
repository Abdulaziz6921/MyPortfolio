import React, { useState } from "react";
import { useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import selfie from "../Images/selfie.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [open, setOpen] = useState(true);

  const stl = {
    size: "relative bg-primary w-[95%] h-[60px] border-2 border-red-500 mx-auto flex justify-between items-center text-white overflow-hidden md:h-[80px] md:sticky top-0 right-0 left-0 md:z-20 lg:w-[90%] md:z-20",

    name: "text-[25px] oblique font-mono font-bold md:text-[32px]",

    main_links:
      "hidden md:flex justify-evenly items-center md:w-[50%] md:h-[55px] lg:w-[45%]  border-2 border-green-500  ",

    li: "w-[130px] h-full",

    li_a: "w-full h-full flex justify-center items-center font-[600] text-[20px] duration-400 hover:text-secondary hover:rounded-[8px] hover:bg-gradient-to-r from-[#636363] to-[#bab8b8] hover:shadow-xl hover:duration-300",

    three_bar:
      "w-[50px] flex justify-center items-center h-full border-2 border-green-700 md:hidden",

    bar: "text-[42px]",

    arrow_icon:
      "mt-[10px] mb-[20px] ml-[5%] text-[25px] bg-[#bcfd4c] rounded-[50%] hover:text-primary",

    img: "w-[140px] h-[140px] mt-[20px] mx-auto mb-[5px] rounded-full object-contain",

    profession: "text-center text-[17px] text-primary font-[600]",

    li_collection: "w-full h-[25%] flex flex-col justify-between mt-[20px]",

    l_items:
      "group w-[95%] h-[65px] flex items-center justify-center rounded-r-[14px] hover:bg-primary ",

    inner_li: "w-[135px] h-full flex justify-start items-center",

    l_items_a: "group-hover:text-secondary",

    l_items_icons: " text-[15px] mr-[10px] group-hover:text-secondary",

    right_slider: `${
      open ? "translate-x-[600px]" : "translate-x-[0px]"
    } w-[50%] h-full fixed right-0 top-0 z-20 rounded-l-[25px] bg-[#bcfd4c] duration-500 md:hidden`,
  };

  return (
    <div className={stl.size}>
      <div
        className={stl.name}
        data-aos="slide-down"
        data-aos-duration="130000"
        data-aos-delay="400"
      >
        Abdulaziz-<span title="Front-End Developer">F.E.D.</span>
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
            <div className={stl.inner_li}>
              <AiFillHome className={stl.l_items_icons} />
              <a href="#home" className={stl.l_items_a}>
                Home
              </a>
            </div>
          </li>

          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <FaUser className={stl.l_items_icons} />
              <a href="#about" className={stl.l_items_a}>
                About me
              </a>
            </div>
          </li>
          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <FaProjectDiagram className={stl.l_items_icons} />
              <a href="#project" className={stl.l_items_a}>
                Project
              </a>
            </div>
          </li>
          <li className={stl.l_items}>
            <div className={stl.inner_li}>
              <FaPhone className={stl.l_items_icons} />
              <a href="#contact" className={stl.l_items_a}>
                Contact
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
