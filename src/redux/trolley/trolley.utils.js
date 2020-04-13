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
