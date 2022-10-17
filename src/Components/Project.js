import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import jimdo from "../Images/Jimdo.jpg";
import jimdo2 from "../Images/Jimdo media.jpg";
import movie from "../Images/123.png";
import movie2 from "../Images/123 md.jpg";
import camera from "../Images/camera.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser, FaProjectDiagram, FaPhone } from "react-icons/fa";

function Project({ phone_stl }) {
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
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
    {
      title: "Ultricies Vulputate Mollis Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "odo Aenean Quam Tortor Dapimodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis  purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "volutpat Aenean metus",
      description:
        "quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentumconsectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
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
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const stl = {
    size: "text-white relative mt-[70px] mx-auto w-[95%] md:w-[90%] h-fit flex flex-col justify-center items-center shadow-[10px_0_60px_20px_rgba(0,0,0,0.7)] bg-gradient-to-l from-red_like to-blue_like rounded-[20px]",

    header:
      "text-white text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px] mt-[50px]",

    container:
      "lg:w-[97%] w-full md:w-[95%] mx-auto h-fit border-4 border-red-700 pb-[18%]",

    box: "md:h-[350px] h-[630px] border-2 border-blue-600",

    inner_box:
      "group flex flex-col  justify-center items-center relative m-auto h-full rounded-[30px] w-[95%]  border-red-400 border-4 hover:w-full duration-[2s] hover:duration-[2s] hover:rounded-[0px] overflow-hidden ",

    onHover:
      "flex bg-black/[0.8] flex-col justify-center items-center w-full h-0 absolute bottom-[100%] left-0 right-0 duration-700 overflow-hidden group-hover:bottom-0 group-hover:h-full group-hover:duration-700 z-10",

    title: " md:text-[60px] text-[35px] text-[#FFA200] font-bold text-center",

    description: "md:text-[30px] text-[20px] text-center",

    btn: "w-[160px] h-[50px] hover:bg-gradient-to-l from-blue_like to-red_like rounded-full hover:duration-1000 text-white mt-[30px] bg-[#FFA200] hover:text-white duration-1000 text-[18px]  hover:animate-pulse",

    prjct_img:
      "absolute top-0 -z-10 w-full h-full hidden md:block border-2 border-indingo-600",

    img_self: "w-full h-full object-cover",

    prjct_img_4_phone:
      "absolute top-0 -z-10 w-full h-full md:hidden  border-2 border-indingo-600",
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
                  <h1 id="title" className={stl.title}>
                    {item.title}
                  </h1>
                  <h1 className={stl.description}>{item.description}</h1>
                  <button className={stl.btn}>Visit site</button>
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

      <div className={phone_stl.phone_top}>
        <img
          src={camera}
          alt="camera"
          className="w-[30px] h-[30px] object-cover"
        />
      </div>
      <div className={phone_stl.phone_bottom}>
        <a href="#home">
          <AiFillHome />
        </a>
        <a href="#about">
          {" "}
          <FaUser />
        </a>
        <a href="#project" className={phone_stl.active}>
          {" "}
          <FaProjectDiagram />
        </a>
        <a href="#contact">
          <FaPhone />
        </a>
      </div>
    </div>
  );
}

export default Project;
