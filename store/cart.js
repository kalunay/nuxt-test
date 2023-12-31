export const state = () => ({
  products: [],
  show: 0,
  order: 0,
  total: 0
});

export const mutations = {
  addToCart(state, product) {
    let isCheck = state.products.findIndex((item) => item?.id === product?.id);
    if(isCheck < 0){
      state.products.push(product);
    }
    state.show = !state.show;
  },
  delItem(state, product){
    state.products = state.products.filter((item) => item.id !== product);
  },
  showCart(state, show){
    state.show = !show;
  },
  showForm(state, order){
    state.order = !order;
  },
  changeQty(state, product){
    let item = state.products.find((item) => item?.id === product?.id);
    item.qty = product?.qty;
  },
}

export const getters = {
  getTotal: (state) => {
    if(state.products.length > 0){
      let sum = 0;
      state.products.map(x => sum += (x.product.price * x.qty));
      return sum
    }
    return 0
  },
}
