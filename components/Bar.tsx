import { FunctionComponent } from "react";
import { ISkill } from "../types";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { name, level, Icon },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-900 to-blue-400"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
