import Image from "next/image";
import userProfile from "../public/images/userProfile.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from "react-icons/ai";
import { FaDev, FaLocationArrow } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div>
      <Image
        src={userProfile}
        alt="user-profile"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="my-3 text-3xl font-medium tracking-wider font-roboto-condensed">
        <span className="font">Jhon </span>
        Doe
      </h2>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full font-roboto-condensed">
        Web/Mobile Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 space-x-2 bg-gray-200 rounded-full font-roboto-condensed"
        href="#"
        download="resume"
      >
        <AiFillFileText className="text-green" /> My Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
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
        className="py-4 my-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <FaLocationArrow className="text-green" />
          <span className="font-roboto-condensed">Karachi,Pakistan</span>
        </div>
        <p className="my-2 font-roboto-condensed">Jhon@doe.com</p>
        <p className="my-2 font-roboto-condensed">+14434567890</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r font-roboto-condensed from-green to-blue-400"
        onClick={() => window.open("mailto:")}
      >
        Contact me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r font-roboto-condensed from-green to-blue-400">
        Dark mode
      </button>
    </div>
  );
};

export default Sidebar;
