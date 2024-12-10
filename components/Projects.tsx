import { projects } from "@/data";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";

const PinContainer = dynamic(
  () => import("./ui/PinContainer").then((m) => m.PinContainer),
  {
    ssr: false,
  }
);

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A list of my <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h2>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, ind) => (
                    <div
                      key={icon}
                      style={{
                        transform: `translateX(-${10 * ind}px)`,
                      }}
                      className={` border border-white/[0.2] rounded-full bg-black lg:w-10 
                        lg:h-10 w-8 h-8 flex justify-center items-center`}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="lg:text-xl md:text-xs text-sm text-purple">
                    Check live Site
                  </p>
                  <FaLocationArrow color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
