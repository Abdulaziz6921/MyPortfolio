import vector from "../Images/contactimage.png";

function Contact() {
  let stl = {
    size: "relative w-[95%] h-fit flex flex-col  items-center justify-center  my-[50px] mx-auto text-white font-[700] rounded-[20px] hover:shadow-[12px_0px_15px_10px_rgba(0,0,0,0.5)] duration-500 md:w-[90%] md:flex-row xl:w-[1340px] xxl-[1540px]  md:my-[8%] ",

    chat: "w-full h-fit flex flex-col justify-around items-center text-dark_like rounded-t-[20px] py-[10%] md:py-[5%] md:w-[50%] md:h-[500px] lg:h-[650px] md:rounded-t-[0px] md:rounded-l-[20px] bg-white ",

    header: "text-center text-[25px] md:text-[35px] lg:text-[45px]",
    btn: "w-[120px] h-[40px] my-[25px] tracking-[2px] font-[500] bg-dark_like text-white text-[14px] hover:text-secondary hover:duration-500",
    vector_Img: "w-[60%] h-[60%]",
    img_self: "w-full h-full object-contain",

    contact:
      "w-full h-fit flex flex-col justify-center rounded-b-[20px] py-[32%] md:w-[50%] md:h-[500px] lg:h-[650px] md:py-[5%] bg-dark_like md:rounded-b-[0px] md:rounded-r-[20px] border-[5px] border-white",

    h1: "text-[35px] text-right md:mr-[80px] mr-[40px] relative md:text-[40px] lg:text-[80px] tracking-[2px] md:tracking-[3px]",
    line: "w-[50px] h-[2px] bg-white absolute right-[55px] top-[50%] md:w-[70px] md:right-[70px] lg:right-[130px] lg:w-[140px]",
  };

  return (
    <div className={stl.size} id="contact">
      <div className={stl.chat}>
        <h1 className={stl.header}>Let's have a quick chat</h1>
        <button className={stl.btn}>Copy Email</button>
        <div className={stl.vector_Img}>
          <img src={vector} alt="vector_contact" className={stl.img_self} />
        </div>
      </div>

      <div className={stl.contact}>
        <h1 className={stl.h1}>Contact</h1>

        <h1 className={stl.h1}>
          <div className={stl.line}></div> Me
        </h1>

        <div></div>
      </div>
    </div>
  );
}

export default Contact;
