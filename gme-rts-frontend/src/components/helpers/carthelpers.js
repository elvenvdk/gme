// export const addItem = (item, next) => {
//   let cart = [];
//   if (typeof window !== 'undefined') {
//     if (localStorage.getItem('cart')) {
//       cart = JSON.parse(localStorage.getItem('cart'));
//     }
//     cart.push({
//       ...item,
//       count: 1,
//     });
//     cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
//       return cart.find(p._id === id);
//     });

//     localStorage.setItem('cart', JSON.stringify(cart));
//     next();
//   }
// };

export const addItem = item => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
    }
    localStorage.setItem('cart', JSON.stringify(item));
  }
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('cart'));
  }
};

export const deleteCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
      return true;
    }
    return false;
  }
};
