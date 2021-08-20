import { FunctionComponent } from "react";
import { Category } from "../types";

const NavItem: FunctionComponent<{
  value: Category | "All";
  handleFilter: Function;
  active: string;
}> = ({ value, handleFilter, active }) => {
  let className = "cursor-pointer hover:text-blue-900";
  if (active === value) {
    className += " text-blue-900";
  }
  return (
    <li className={className} onClick={() => handleFilter(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilter: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 list-none">
      <NavItem value="All" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="TailwindCSS" {...props} />
      <NavItem value="Express" {...props} />
      <NavItem value="MongoDB" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
