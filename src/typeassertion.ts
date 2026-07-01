//what is type assertion -
//guiding typescript to take the correct type

//how to fix this code

const getItem = (item: number | undefined) => {
  //   return (item as number).toString();
  if (!item) {
    return null;
  }
  return item.toString();
};
