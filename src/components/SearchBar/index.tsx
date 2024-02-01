import FilterIcon from "../../asserts/FilterIcon";
import SearchIcon from "../../asserts/SearchIcon";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 20px 60px 0px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        border: "1px solid #ECEEF6",
        height: "52px",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
        width: "392px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <SearchIcon />
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#C4C4C4",
          }}
        >
          Search...
        </p>
      </div>
      <FilterIcon />
    </div>
  );
};
export default SearchBar;
