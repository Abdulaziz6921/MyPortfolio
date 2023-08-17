import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

function Home() {
  const [time, setTime] = useState(true);

  const myFunc = () => {
    setTimeout(() => {
      setTime(false);
    }, 1000);
  };
  myFunc();

  let stl = {
    size: "relative px-[3%] w-full h-fit flex bg-dark_like items-center justify-center text-white font-[700] md:py-[8%] md:px-0",

    intro: `${
      time ? "translate-x-[-1000px]" : "translate-x-[0]"
    } duration-[1.3s] w-full h-fit flex flex-col justify-center mr-0 lg:w-[42%] md:w-[55%]  md:mr-[20px] py-[32%] md:py-[7%] `,

    hand: "animate-wiggle inline ml-[2%] w-[28px] h-[35px] lg:w-[40px] lg:h-[40px] lg:[4%]",

    intro_h2: "text-secondary text-[27px] mt-[10px] mb-[20px] md:text-[30px]",

    intro_p:
      "text-[18px] pr-[34%] leading-[22px] font-[600] md:text-[20px] lg:pr-[45%]",

    btn: "w-[180px] h-[50px] mt-[40px] mb-[23px] relative tracking-[2px] font-[700] border-[1px] border-secondary rounded-[15px] bg-transparent py-2.5 px-5 uppercase text-secondary transition-colors hover:border-0 before:absolute before:left-0 before:top-0 before:rounded-[15px] before:-z-10 before:h-full before:w-full  before:scale-x-0 before:bg-secondary before:transition-transform before:duration-700 before:content-[''] hover:text-white before:hover:scale-x-100 hover:shadow-[12px_0px_15px_10px_rgba(0,0,0,0.5)] ",

    intro_arrow:
      "inline ml-[12px] mt-[15px] font-[700] text-[28px] animate-bounce",

    photo: `${
      time ? "translate-x-[1000px]" : "translate-x-[0]"
    } duration-[1.3s] hidden md:block md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px]`,

    photo_self: "w-full h-full object-cover rounded-full",

    photo_div1: ` md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] border-[10px] border-[#FFA200] bg-dark_like rounded-full`,

    photo_div: `${
      time ? "translate-x-[1000px]" : "translate-x-[0]"
    } duration-[1.4s] hidden md:block md:w-[280px] md:h-[280px] lg:w-full lg:h-full absolute top-0 md:left-[20px] lg:left-[60px] xl:left-[45px] rounded-l-full bg-[#FFA200] z-[-10]`,

    tag_left: "font-[200] text-[240px] hidden xl:block absolute left-0 ",

    tag_right:
      "font-[200] text-[240px] hidden xl:block absolute  right-0 z-[1]",
  };

  return (
    <div className={stl.size} id="home">
      <a
        href="#home"
        className={stl.tag_left}
        data-aos="fade-down-right"
        data-aos-duration="300000"
        data-aos-delay="2500"
      >
        &#60;
      </a>

      <a
        href="#about"
        className={stl.tag_right}
        data-aos="fade-up-left"
        data-aos-duration="300000"
        data-aos-delay="2500"
      >
        &#62;
      </a>

      <div className={stl.intro}>
        <h1 className="text-[42px] md:text-[45px] lg:text-[50px]">
          Hi, I'm <span className="text-secondary">Abdulaziz</span>
          <img
            src="./Images/wave.svg"
            alt=""
            className={stl.hand}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="3000"
          />
        </h1>
        <h2
          className={stl.intro_h2}
          data-aos="fade-up-right"
          data-aos-duration="300000"
          data-aos-delay="2100"
        >
          Frontend Developer
        </h2>
        <p
          className={stl.intro_p}
          data-aos="fade-up-left"
          data-aos-duration="300000"
          data-aos-delay="2400"
        >
          Passionate about creating &amp; developing interactive websites using
          latest web technologies.
        </p>
        <div className="z-10 space-x-6">
          <button
            className={stl.btn}
            data-aos="fade-up-right"
            data-aos-duration="300000"
            data-aos-delay="2700"
          >
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        <p
          className="text-[20px]"
          data-aos="fade-up-left"
          data-aos-duration="300000"
          data-aos-delay="3000"
        >
          Scroll down
          <BsArrowDown className={stl.intro_arrow} />
        </p>
      </div>

      <div className={stl.photo}>
        <div className={stl.photo_div1}>
          <img src="./Images/selfie.png" alt="me" className={stl.photo_self} />
        </div>

        <div className={stl.photo_div}></div>
      </div>
    </div>
  );
}

export default Home;
