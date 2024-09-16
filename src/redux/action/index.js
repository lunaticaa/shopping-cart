// for add item to cart

export function addCart(product) {
  return {
    type: "ADDITEM",
    payload: product,
  };
}

// for delete item from cart

export function delCart(product) {
  return {
    type: "DELITEM",
    payload: product,
  };
}
