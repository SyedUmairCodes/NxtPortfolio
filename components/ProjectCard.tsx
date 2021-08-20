import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import { useState } from "react";
const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    description,
    image_path,
    github_url,
    deployed_url,
    category,
    tech,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center font-roboto-condensed">{name}</p>
      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span className="font-roboto-condensed">GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span className="font-roboto-condensed">Live Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:2xl font-roboto-condensed">
              {name}
            </h2>
            <h3 className="mb-3 font-medium font-roboto-condensed">
              {description}
            </h3>
            <div className="flex flex-wrap mt-5 space-x-3 text-sm tracking-wider font-roboto-condensed">
              {tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
