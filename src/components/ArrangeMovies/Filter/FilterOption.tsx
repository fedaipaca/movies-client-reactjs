import classes from "./FilterOption.module.css";

interface FilterOptionProps {
  id: string;
  title: string;
  isActive: boolean;
}

const FilterOption: React.FC<FilterOptionProps> = ({ id, title, isActive = false }) => {
  return (
    <li>
      <button className={`${classes["filter__genre"]} ${isActive ? classes["filter__genre--active"] : ""}`}>
        {title}
      </button>
    </li>
  );
};

export default FilterOption;
