import { IconType } from "react-icons";
import {
  AiFillApi,
  AiFillBook,
  AiFillCloud,
  AiFillMobile,
} from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";

interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    Icon: RiComputerFill,
    title: "Frontend",
    about: "HTML, CSS, SASS, Responsive-design, React, TailwindCSS",
  },
  {
    Icon: AiFillApi,
    title: "Backend",
    about: "JavaScript, Node.js, PHP, Laravel",
  },
  {
    Icon: AiFillMobile,
    title: "Mobile development",
    about: "React-native, Flutter",
  },
  {
    Icon: AiFillCloud,
    title: "Cloud-native development",
    about: "AWS, CI/CD, Docker, Kubernetes",
  },
  {
    Icon: AiFillBook,
    title: "Technical-content Writer",
    about: "I mostly write articles on Dev.to",
  },
];
