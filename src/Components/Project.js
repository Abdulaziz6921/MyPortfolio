import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import jimdo from "../Images/Jimdo.jpg";

function Project() {
  const content = [
    {
      image: jimdo,
      title: "Clone of Jimdo site",
      description: "Done with HTML and Tailwind",
      button: "Visit site",
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
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
    autoplaySpeed: 2500,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[40px] mx-auto w-[95%] h-[100vh] flex flex-col justify-center items-center border-4 border-red-700">
      <h1
        id="project"
        className="text-white text-[50px] font-[700] mb-[20px] md:text-[60px] lg:text-[70px]"
      >
        Projects
      </h1>
      <div className="lg:w-[97%] w-[90%] mx-auto h-fit  border-4 border-red-700">
        <Slider {...settings}>
          {content.map((item, index) => (
            <div key={index} className="h-[240px] border-2 border-blue-600">
              <div className="flex flex-col justify-center items-center relative m-auto h-full rounded-[30px] w-[95%]  border-red-400 border-4 hover:w-full duration-[2s] hover:duration-[2s] hover:rounded-[0px] overflow-hidden">
                <h1
                  id="title"
                  className="text-white text-fill-black text-[28px] font-bold "
                >
                  {item.title}
                </h1>
                <h1 className="text-white">{item.description}</h1>
                <h1 className="text-white">{item.button}</h1>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full absolute top-0 -z-10 object-cover brightness-[60%]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Project;
