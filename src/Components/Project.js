import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
// import bubble from "../Images/naval.png";

function Project() {
  const content = [
    {
      image: "./Images/Jimdo.jpg",
      media_image: "./Images/Jimdo media.jpg",
      title: "Clone of Jimdo",
      description: "Done with HTML and Tailwind",
      link: "https://jimdoclone.netlify.app/",
    },
    {
      image: "./Images/ToDo List.jpg",
      media_image: "./Images/ToDo List md.jpg",
      title: "To Do List",
      description: "Done with HTML, CSS and JS",
      link: "https://todolistbyabdulaziz.netlify.app",
    },
    {
      image: "./Images/clock.png",
      media_image: "./Images/clock md.jpg",
      title: "Analog Clock",
      description: "Done with HTML, CSS and JS",
      link: "https://modeclock.netlify.app/",
    },
    {
      image: "./Images/shopper.png",
      media_image: "./Images/shopper md.jpg",
      title: "Clone of Shopper",
      description: "Done with HTML and Sass",
      link: "https://shopperclone.netlify.app/",
    },
    {
      image: "./Images/dwbtstrap.png",
      media_image: "./Images/dwbtstrap_media.jpg",
      title: "Clone of Figma site",
      description: "Done with Html,Bootstrap and Scss",
      link: "https://sitedonewithbootstrap.netlify.app/",
    },
    {
      image: "./Images/123.png",
      media_image: "./Images/123 md.jpg",
      title: "Clone of 123movies",
      description: "Done with HTML, CSS and JS",
      link: "https://123moviesclone.netlify.app/",
    },
    {
      image: "./Images/crud.png",
      media_image: "./Images/crud_md.jpg",
      title: "CRUD",
      description: "Done with Tailwind and React",
      link: "https://crud-by-abdulaziz.netlify.app/",
    },
  ];
  const stl = {
    arrowRight:
      "top-0 bottom-0 my-auto text-[30px] bg-white rounded-full text-secondary hover:text-white hover:bg-secondary duration-500 absolute right-0",

    arrowLeft:
      "top-0 bottom-0 my-auto text-[30px] bg-white rounded-full text-secondary hover:text-white hover:bg-secondary duration-500 absolute right-0",

    size: "text-white relative mt-[70px] w-full h-fit flex flex-col justify-center items-center bg-secondary rounded-[20px] md:my-[8%]",

    header:
      "text-white text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px] mt-[50px]",

    container: "lg:w-[80%] w-full md:w-[95%] mx-auto h-fit pb-[18%] md:pb-[8%]",

    box: "md:h-[350px] h-[630px]",

    inner_box:
      "group flex flex-col  justify-center items-center relative m-auto h-full rounded-[30px] w-[95%] hover:w-full duration-[2s] hover:duration-[2s] hover:rounded-[0px] overflow-hidden ",

    onHover:
      "flex bg-transparent flex-col justify-center items-center w-full h-0 absolute bottom-[100%] left-0 right-0 duration-500 overflow-hidden group-hover:bottom-0 group-hover:h-full group-hover:duration-700 z-10",

    bubble:
      "w-full h-full  absolute z-[-1] object-contain md:object-cover bg-dark_like-400 md:w-[550px] md:h-[550px] lg:w-[470px] lg:h-[470px]",

    title: " md:text-[53px] text-[35px] text-secondary font-bold text-center",

    description: "md:text-[30px] text-[20px] text-center",

    btn: "w-[160px] h-[50px] hover:bg-gradient-to-l from-[#61EEFE] to-[#D344FE] rounded-full hover:duration-1000 text-white mt-[30px] bg-[#FFA200] hover:text-white duration-1000 text-[18px]  hover:animate-pulse hover:border-2 border-[#5DF8FE] hover:text-[#FFA200] text-[20px] font-semibold",

    prjct_img: "absolute top-0 -z-10 w-full h-full hidden md:block",

    img_self: "w-full h-full object-cover",

    prjct_img_4_phone: "absolute top-0 -z-10 w-full h-full md:hidden",
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
                  <svg
                    version="1.1"
                    viewBox="0 0 600 600"
                    className={stl.bubble}
                  >
                    <path
                      d="M427.03350830078125,183.40684509277344C383.3732198079427,170.69751485188803,336.12441380818683,179.6688028971354,282.595703125,177.12693786621094C229.06699244181314,174.58507283528647,147.4282315572103,156.64249674479166,105.86124420166016,168.15565490722656C64.29425684611002,179.66881306966147,48.594496726989746,199.85421498616537,33.19377899169922,246.2058868408203C17.79306125640869,292.5575586954753,-2.840909957885742,404.5491765340169,13.456937789916992,446.26568603515625C29.754785537719727,487.9821955362956,79.3959347407023,486.6365203857422,130.98086547851562,496.50494384765625C182.56579621632895,506.3733673095703,266.59690348307294,503.6819712320964,322.9665222167969,505.4762268066406C379.3361409505208,507.2704823811849,434.2105458577474,521.0264587402344,469.1985778808594,507.2704772949219C504.1866099039714,493.5144958496094,520.3349049886068,465.2549311319987,532.8947143554688,422.9403381347656C545.4545237223307,380.62574513753253,562.2009684244791,293.30516815185547,544.5574340820312,253.38291931152344C526.9138997395834,213.4606704711914,470.6937967936198,196.11617533365884,427.03350830078125,183.40684509277344C383.3732198079427,170.69751485188803,336.12441380818683,179.6688028971354,282.595703125,177.12693786621094"
                      fill='url("#SvgjsLinearGradient1005")'
                      transform="matrix(1,0,0,1,20.15313148498535,-38.82792663574219)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="SvgjsLinearGradient1005"
                        gradientTransform="rotate(39, 0.5, 0.5)"
                      >
                        <stop stop-color="hsl(184, 74%, 44%)" offset="0"></stop>
                        <stop stop-color="hsl(332, 87%, 70%)" offset="1"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
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
