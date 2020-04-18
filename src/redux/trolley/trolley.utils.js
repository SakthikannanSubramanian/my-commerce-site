export const addItemToTrolley = (trolleyItems, itemToAdd) => {
  const existingTrolleyItem = trolleyItems.find(
    (trolleyItem) => trolleyItem.id === itemToAdd.id
  );

  if (existingTrolleyItem) {
    return trolleyItems.map((trolleyItem) =>
      trolleyItem.id === itemToAdd.id
        ? {
            ...trolleyItem,
            totalPrice: trolleyItem.totalPrice + itemToAdd.price,
            quantity: trolleyItem.quantity + 1,
          }
        : trolleyItem
    );
  }

  return [
    ...trolleyItems,
    { ...itemToAdd, quantity: 1, totalPrice: itemToAdd.price },
  ];
};

export const reduceItemFromTrolley = (trolleyItems, itemToReduce) => {
  const existingTrolleyItem = trolleyItems.find(
    (trolleyItem) => trolleyItem.id === itemToReduce.id
  );

  if (existingTrolleyItem.quantity === 1) {
    return trolleyItems.filter((item) => item.id !== itemToReduce.id);
  }

  return trolleyItems.map((item) =>
    item.id === itemToReduce.id
      ? {
          ...item,
          quantity: item.quantity - 1,
          totalPrice: item.totalPrice - itemToReduce.price,
        }
      : item
  );
};
