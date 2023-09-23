export const SearchInput = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};
