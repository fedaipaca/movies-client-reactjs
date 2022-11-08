import classes from "./Filter.module.css";
import FilterOption from "./FilterOption";

const filters = [
  { id: "1", title: "All" },
  { id: "2", title: "Documentary" },
  { id: "3", title: "Comedy" },
  { id: "4", title: "Horror" },
  { id: "5", title: "Crime" },
];

const Filter: React.FC = () => {
  return (
    <nav className={classes.filter}>
      <ul className={classes["filter__genres"]}>
        {filters?.map((filter) => (
          <FilterOption id={filter.id} title={filter.title} isActive={filter.title === "All"} />
        ))}
      </ul>
      <div className={classes["filter__sort"]}>
        <span className={classes["filter__sort-tag"]}>SORT BY</span>
        <button className={classes["filter__sort-btn"]}>Release Date</button>
      </div>
    </nav>
  );
};

export default Filter;
