import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { IService } from "../types";
const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="flex items-center p-2 space-x-4 bg-gray-300 dark:bg-dark-200"
    >
      <Icon className="w-12 h-12 text-blue-900" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
