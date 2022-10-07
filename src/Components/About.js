import React from "react";
import html from "../Images/html.png";
import css from "../Images/CSS3.png";
import sass from "../Images/Sass.png";
import bootstrap from "../Images/bootstrap.png";
import js from "../Images/js.png";
import korean from "../Images/korean.png";
import react from "../Images/react.png";
import russian from "../Images/russian.png";
import tailwind from "../Images/tailwind.png";
import us from "../Images/us.png";
import uzbek from "../Images/uzbek.png";

function About() {
  let stl = {
    size: "w-[95%] h-fit flex flex-col items-center justify-around mt-[50px] mx-auto border-2 border-white md:w-[90%] md:mt-[80px] text-white",

    about:
      "w-full h-fit flex flex-col justify-center items-center mt-[50px] border-secondary border-2 md:w-[95%] md:mt-[100px] lg:w-[75%]",

    title: "text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px]",

    text: "text-[5cqi] font-[400] leading-[38px] tracking-[0px] text-justify px-[5px] md:px-[10px] md:text-justify md:text-[25px] md:font-[600] md:leading-[45px] md:tracking-[0.1px] lg:px-[14%]",

    span: "text-secondary",

    skill:
      "w-[95%] h-fit border-2 border-red-500 flex flex-col justify-between items-center mt-[100px] md:w-[75%] md:mt-[150px] lg:mt-[200px]",

    wrapper:
      "w-full h-fit flex justify-center items-center mt-[25px] md:mt-[40px] lg:mt-[60px]",

    wrap: "mx-1 w-1/4 h-fit flex flex-col justify-between items-center lg:w-1/3",

    wrap_img:
      "w-[70px] h-[90px] object-contain md:w-[100px] md:h-[120px] lg:w-[160px] lg:h-[160px]",

    bar: "mt-[20px] w-full h-[12px] md:mt-[30px] md:w-[120px] lg:w-[160px] ",

    back_filler: "w-full h-[10px] relative bg-white rounded-2xl",

    percent:
      "absolute mb-2 -right-4 bottom-full bg-black text-white rounded-sm font-semibold text-[10.5px] py-[1px] px-[6px] md:text-[13px]  md:px-[8px] md:rounded-[3px]",

    hook: "w-2 h-2 rotate-45 bg-black absolute -z-10 bottom-[-2px] left-1/2 -translate-x-1/2 rounded-sm md:w-3 md:h-3",
  };
  return (
    <>
      <div className={stl.size} id="about">
        <div
          className={stl.about}
          data-aos="zoom-in"
          data-aos-duration="100000"
          data-aos-delay="300"
        >
          <h1 className={stl.title}>About me</h1>
          <p
            className={stl.text}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="900"
          >
            My full name is <span className={stl.span}>Abdulaziz Tojiboev</span>
            . I love programming and learning foreign languages. I am a
            <span className={stl.span}> web developer</span> having
            specialization in
            <span className={stl.span}> front end development</span>. I have
            <span className={stl.span}>
              {" "}
              finished a web development course{" "}
            </span>
            and <span className={stl.span}>did self-study </span> during the
            course to get familiar better with all necessary web technologies
            and techniques to be a front end developer. I have Frontend Skills
            in
            <span className={stl.span}>
              {" "}
              Javascript, ReactJS, Css3/Sass, Tailwind/Bootstrap and Html5
            </span>
            . I speak
            <span className={stl.span}> English, Uzbek, some Korean</span> and
            <span className={stl.span}> Russian</span> languages.
          </p>
        </div>

        <div class={stl.skill}>
          <h1
            class={stl.title}
            data-aos="zoom-in"
            data-aos-duration="100000"
            data-aos-delay="300"
          >
            Skills:
          </h1>
          <div class={stl.wrapper}>
            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="400"
            >
              <img src={html} alt="html" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-full bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class={stl.wrapper}>
            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="400"
            >
              <img src={css} alt="css" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[95%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      95%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="600"
            >
              <img src={sass} alt="sass" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[90%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      90%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class={stl.wrapper}>
            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="400"
            >
              <img src={tailwind} alt="tailwind" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[85%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      85%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="600"
            >
              <img src={react} alt="react" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[80%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      80%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="800"
            >
              <img src={js} alt="js" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[75%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class={stl.wrapper}>
            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="400"
            >
              <img src={uzbek} alt="uzbek language" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-full bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="600"
            >
              <img src={us} alt="english language" className={stl.wrap_img} />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[90%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      90%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="800"
            >
              <img
                src={russian}
                alt="russian language"
                className={stl.wrap_img}
              />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[70%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      70%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class={stl.wrap}
              data-aos="fade-right"
              data-aos-duration="100000"
              data-aos-delay="1000"
            >
              <img
                src={korean}
                alt="korean language"
                className={stl.wrap_img}
              />

              <div class={stl.bar}>
                <div class={stl.back_filler}>
                  <div class="absolute top-0 left-0 rounded-2xl h-full w-[50%] bg-secondary">
                    <span class={stl.percent}>
                      <span class={stl.hook}></span>
                      50%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
