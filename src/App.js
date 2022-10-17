import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";

function App() {
  let stl = {
    phone_top:
      "flex justify-center absolute top-0 md:hidden w-full h-[40px] bg-black rounded-t-[20px]",

    phone_bottom:
      "flex justify-around items-center text-[20px] absolute bottom-0 md:hidden w-full h-[50px] bg-black rounded-b-[20px] ",

    active:
      "flex justify-center items-center bg-white/[0.3] rounded-full w-[40px] h-[40px]",
  };
  return (
    <div>
      <Navbar />
      <Home phone_stl={stl} />
      <About phone_stl={stl} />
      <Project phone_stl={stl} />
    </div>
  );
}

export default App;
