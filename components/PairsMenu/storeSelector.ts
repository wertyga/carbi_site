const storeSelector = ({
  marketsStore: { totalData },
}) => ({
  marketsData: totalData,
});

export default storeSelector;
