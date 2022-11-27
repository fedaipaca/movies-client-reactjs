import classes from "./Sort.module.css";

const sortingCriterias = ["Release Date", "Name"];

const Sort: React.FC = () => {
  return (
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
  );
};

export default Sort;
