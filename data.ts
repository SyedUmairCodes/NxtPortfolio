import { IconType } from "react-icons";
import {
  AiFillApi,
  AiFillBook,
  AiFillCloud,
  AiFillMobile,
} from "react-icons/ai";
import { RiAddCircleFill, RiComputerFill } from "react-icons/ri";
import { ISkill, IService } from "./types";

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

export const languages: ISkill[] = [
  {
    name: "HTML/CSS",
    level: "90%",
    Icon: RiAddCircleFill,
  },
  {
    name: "JavaScript",
    level: "70%",
    Icon: RiAddCircleFill,
  },
  {
    name: "TailwindCSS",
    level: "50%",
    Icon: RiAddCircleFill,
  },
  {
    name: "React",
    level: "65%",
    Icon: RiAddCircleFill,
  },
  {
    name: "React-native",
    level: "50%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Flutter",
    level: "50%",
    Icon: RiAddCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "VS-Code",
    level: "90%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Git & GitHub",
    level: "70%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Linux",
    level: "60%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Slack",
    level: "55%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Docker",
    level: "55%",
    Icon: RiAddCircleFill,
  },
  {
    name: "Kubernetes",
    level: "50%",
    Icon: RiAddCircleFill,
  },
];
