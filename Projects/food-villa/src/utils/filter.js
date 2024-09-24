export function filterData(searchText, restraunts) {
  const filteredData = restraunts.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}
