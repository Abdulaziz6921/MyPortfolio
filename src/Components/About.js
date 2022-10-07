import React from 'react'

function About() {
  let stl = {
    size:
      'w-[95%] h-fit flex flex-col items-center justify-around mt-[50px] mx-auto border-2 border-white md:w-[90%] md:mt-[80px]',

    about:
      'w-full h-fit flex flex-col justify-center items-center mt-[50px] border-secondary border-2 text-white md:w-[95%] md:mt-[100px] lg:w-[75%]',

    title: 'text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px]',

    text:
      'text-[5cqi] font-[400] leading-[38px] tracking-[0px] text-justify px-[5px] md:px-[10px] md:text-justify md:text-[25px] md:font-[600] md:leading-[45px] md:tracking-[0.1px] lg:px-[14%]',

    span: 'text-secondary',
  }
  return (
    <div>
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
              {' '}
              finished a web development course{' '}
            </span>
            and <span className={stl.span}>did self-study </span> during the
            course to get familiar better with all necessary web technologies
            and techniques to be a front end developer. I have Frontend Skills
            in
            <span className={stl.span}>
              {' '}
              Javascript, ReactJS, Css3/Sass, Tailwind/Bootstrap and Html5
            </span>
            . I speak
            <span className={stl.span}> English, Uzbek, some Korean</span> and
            <span className={stl.span}> Russian</span> languages.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
