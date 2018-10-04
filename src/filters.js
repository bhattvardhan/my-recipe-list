const filters = {
  searchText: "",
  isAvailable: false
};

const getFilters = () => filters;

const setFilters = ({ searchText, isAvailable }) => {
  if (typeof searchText === "string") {
    searchText = searchText;
  }

  if (typeof isAvailable === "boolean") {
    isAvailable = isAvailable;
  }
};

export { getFilters, setFilters };
