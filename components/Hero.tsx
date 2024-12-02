import { Spotlight } from "./ui/Spothlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen 
        animate-spotlight"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vh]
        animate-spotlight"
        fill="purple"
      />
      <Spotlight
        className="top-10 left-[40rem] h-[80vh] w-[60vh]
        animate-spotlight"
        fill="blue"
      />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </div>
  );
};

export default Hero;
