import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import jimdo from "../Images/Jimdo.jpg";
import jimdo2 from "../Images/Jimdo media.jpg";
import movie from "../Images/123.png";
import movie2 from "../Images/123 md.jpg";
import clock from "../Images/clock.png";
import clock2 from "../Images/clock md.jpg";
import shopper from "../Images/shopper.png";
import shopper2 from "../Images/shopper md.jpg";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import bubble from "../Images/naval.png";

function Project() {
  const content = [
    {
      image: jimdo,
      media_image: jimdo2,
      title: "Clone of Jimdo",
      description: "Done with HTML and Tailwind",
      link: "https://jimdoclone.netlify.app/",
    },
    {
      image: movie,
      media_image: movie2,
      title: "Clone of 123movies",
      description: "Done with HTML, CSS and JS",
      link: "https://123moviesclone.netlify.app/",
    },
    {
      image: clock,
      media_image: clock2,
      title: "Light/Dark mode clock",
      description: "Done with HTML, CSS and JS",
      link: "https://modeclock.netlify.app/",
    },
    {
      image: shopper,
      media_image: shopper2,
      title: "Clone of Shopper",
      description: "Done with HTML and Sass",
      link: "https://shopperclone.netlify.app/",
    },
  ];
  const stl = {
    arrowRight:
      "top-0 bottom-0 my-auto text-[30px] bg-secondary rounded-full text-white hover:text-secondary hover:bg-white duration-500 absolute right-0",

    arrowLeft:
      "top-0 bottom-0 my-auto text-[30px] bg-secondary rounded-full text-white hover:text-secondary hover:bg-white duration-500 absolute right-0",

    size: "text-white relative mt-[70px] w-full h-fit flex flex-col justify-center items-center bg-secondary rounded-[20px] md:my-[8%]",

    header:
      "text-white text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px] mt-[50px]",

    container:
      "lg:w-[80%] w-full md:w-[95%] mx-auto h-fit border-4 border-green-700 pb-[18%] md:pb-[8%]",

    box: "md:h-[350px] h-[630px] border-2 border-blue-600",

    inner_box:
      "group flex flex-col  justify-center items-center relative m-auto h-full rounded-[30px] w-[95%]  border-red-400 border-4 hover:w-full duration-[2s] hover:duration-[2s] hover:rounded-[0px] overflow-hidden ",

    onHover:
      "flex bg-transparent flex-col justify-center items-center w-full h-0 absolute bottom-[100%] left-0 right-0 duration-500 overflow-hidden group-hover:bottom-0 group-hover:h-full group-hover:duration-700 z-10",

    bubble:
      "w-full h-full  absolute z-[-1] object-contain md:object-cover bg-dark_like",

    title: " md:text-[53px] text-[35px] text-secondary font-bold text-center",

    description: "md:text-[30px] text-[20px] text-center",

    btn: "w-[160px] h-[50px] hover:bg-gradient-to-l from-[#61EEFE] to-[#D344FE] rounded-full hover:duration-1000 text-white mt-[30px] bg-[#FFA200] hover:text-white duration-1000 text-[18px]  hover:animate-pulse hover:border-2 border-[#5DF8FE] hover:text-[#FFA200] text-[20px] font-semibold",

    prjct_img:
      "absolute top-0 -z-10 w-full h-full hidden md:block border-2 border-indingo-600",

    img_self: "w-full h-full object-cover",

    prjct_img_4_phone:
      "absolute top-0 -z-10 w-full h-full md:hidden  border-2 border-indingo-600",
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsArrowRightCircle className={stl.arrowRight} />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsArrowLeftCircle className={stl.arrowLeft} />
      </div>
    );
  };

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className={stl.size}>
      <h1 id="project" className={stl.header}>
        Projects
      </h1>
      <div className={stl.container}>
        <Slider {...settings}>
          {content.map((item, index) => (
            <div key={index} className={stl.box}>
              <div className={stl.inner_box}>
                <div className={stl.onHover}>
                  <img src={bubble} alt="" className={stl.bubble} />
                  <h1 id="title" className={stl.title}>
                    {item.title}
                  </h1>
                  <h1 className={stl.description}>{item.description}</h1>
                  <a href={item.link} target="blank">
                    <button className={stl.btn}>Visit site</button>
                  </a>
                </div>

                <div className={stl.prjct_img}>
                  <img
                    src={item.image}
                    alt="Project"
                    className={stl.img_self}
                  />
                </div>
                <div className={stl.prjct_img_4_phone}>
                  <img
                    src={item.media_image}
                    alt="Project For Phone"
                    className={stl.img_self}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Project;
