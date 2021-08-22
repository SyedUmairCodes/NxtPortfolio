import Image from "next/image";
import userProfile from "../public/images/userProfile.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from "react-icons/ai";
import { FaDev, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={userProfile}
        alt="user-profile"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="my-3 text-2xl font-medium tracking-wider dark:text-white font-roboto-condensed">
        Syed Umair Ali
      </h2>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full font-roboto-condensed dark:bg-dark-200">
        Web/Mobile Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 space-x-2 bg-gray-200 rounded-full dark:bg-dark-200 font-roboto-condensed"
        href="#"
        download="resume"
      >
        <AiFillFileText className="text-blue-900" /> My Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-900 md:w-full">
        <a href="https://linkedin.com">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="https://github.com/syedumairali2000">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="https://Dev.to/syedumairali2000">
          <FaDev className="w-8 h-8" />
        </a>
      </div>
      <div
        className="py-4 my-4 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <FaLocationArrow className="text-blue-900" />
          <span className="font-roboto-condensed">Karachi,Pakistan</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaMailBulk className="text-blue-900" />
          <p className="my-2 font-roboto-condensed">
            syedumairali.617@gmail.com
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaPhone className="text-blue-900" />
          <p className="my-2 font-roboto-condensed">+92-3101123705</p>
        </div>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r font-roboto-condensed from-blue-900 to-blue-400"
        onClick={() => window.open("mailto:")}
      >
        Contact me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r font-roboto-condensed from-blue-900 to-blue-400"
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
