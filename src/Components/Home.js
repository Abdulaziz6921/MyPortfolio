import { useState } from 'react'
import { BsArrowDown } from 'react-icons/bs'
import selfie from '../Images/selfie.jpg'
import wave from '../Images/wave.svg'

function Home() {
  const [time, setTime] = useState(true)

  const myFunc = () => {
    setTimeout(() => {
      setTime(false)
    }, 1000)
  }
  myFunc()

  let stl = {
    size:
      'w-[95%] h-[550px] flex items-center justify-center border-2 border-red-500 mt-[30px] mx-auto text-white font-[700] md:w-[90%]',

    intro: `${
      time ? 'translate-x-[-1000px]' : 'translate-x-[0]'
    } duration-[1.3s] w-full h-fit flex flex-col justify-center mr-0  border-2 border-secondary lg:w-[42%] md:w-[55%]  md:mr-[20px]`,

    hand:
      'animate-wiggle inline ml-[2%] w-[28px] h-[35px] lg:w-[40px] lg:h-[40px] lg:[4%]',

    intro_h2: 'text-secondary text-[27px] mt-[10px] mb-[20px] md:text-[30px]',

    intro_p:
      'text-[18px] pr-[34%] leading-[22px] font-[600] md:text-[20px] lg:pr-[36%]',

    btn:
      "w-[180px] h-[50px] my-[40px] relative tracking-[2px] font-[700] border-[1px] border-secondary rounded-[15px]  bg-transparent py-2.5 px-5 uppercase  text-secondary transition-colors hover:border-0 before:absolute before:left-0 before:top-0 before:rounded-[15px] before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gradient-to-r from-[#6DA210] to-secondary before:transition-transform before:duration-700 before:content-[''] hover:text-white before:hover:scale-x-100",

    intro_arrow:
      'inline ml-[12px] mt-[15px] font-[700] text-[28px] animate-bounce',

    photo: `hidden md:block md:w-[280px] md:h-[280px] lg:w-[400px] lg:h-[400px] animate-photo border-2 border-red-600 ${
      time ? 'translate-x-[1000px]' : 'translate-x-[0]'
    } duration-[1.3s]`,

    photo_self: 'w-full h-full object-cover rounded-full',
  }

  return (
    <div className={stl.size}>
      <div class={stl.intro}>
        <h1 className="text-[42px] md:text-[45px] lg:text-[50px]">
          Hi, I'm <span className="text-secondary">Abdulaziz</span>
          <img
            src={wave}
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
          Good at creating &amp; developing interactive websites using latest
          web technologies.
        </p>
        <div className="z-10 space-x-6">
          <button
            className={stl.btn}
            data-aos="fade-up-right"
            data-aos-duration="300000"
            data-aos-delay="2700"
          >
            Contact Me
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
        <img src={selfie} alt="" className={stl.photo_self} />
      </div>
    </div>
  )
}

export default Home
