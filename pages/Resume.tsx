import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
const resume = () => {
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
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Bachelors in Computer Science
            </h5>
            <p className="font-semibold">The Virtual University of Pakistan</p>
          </div>
        </motion.div>
        <motion.div variants={variants} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Certifications</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Cloud-native architecture
            </h5>
            <p className="font-semibold">Udacity</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 mt-4 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
