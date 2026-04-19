const formatDecimals = (num) => {
  return Number.parseFloat(num).toFixed(2);
};

const calulateCurrentPrice = (product) => {
  if (product.isDiscount) {
    const discountFactor = 1 - product.discountPercentage / 100;

    return product.price * discountFactor;
  }

  return product.price;
};

export { formatDecimals, calulateCurrentPrice };
