import classes from "./Filter.module.css";

const FilterOption: React.FC<{ id: string; title: string; isActive: boolean }> = ({ id, title, isActive = false }) => {
  return (
    <li>
      <button className={`${classes["filter__genre"]} ${isActive ? classes["filter__genre--active"] : ""}`}>
        {title}
      </button>
    </li>
  );
};

export default FilterOption;
