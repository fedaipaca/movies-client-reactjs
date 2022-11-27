import classes from "./Filter.module.css";
import FilterOption from "./FilterOption";

const filters = [
  { id: "a1", title: "All" },
  { id: "b2", title: "Documentary" },
  { id: "c3", title: "Comedy" },
  { id: "d4", title: "Horror" },
  { id: "e5", title: "Crime" },
];

const sortingCriterias = ["Release Date", "Name"];

const Filter: React.FC = () => {
  return (
    <nav className={classes.filter}>
      <ul className={classes["filter__genres"]}>
        {filters?.map((filter) => (
          <FilterOption key={filter.id} id={filter.id} title={filter.title} isActive={filter.title === "All"} />
        ))}
      </ul>
      <div className={classes["filter__sort"]}>
        <label htmlFor="sortBy" className={classes["filter__sort-tag"]}>
          SORT BY
        </label>
        <select defaultValue="Release Date" name="sortBy" id="sortBy">
          {sortingCriterias.map((criteria) => (
            <option key={criteria} value={criteria}>
              {criteria}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Filter;
