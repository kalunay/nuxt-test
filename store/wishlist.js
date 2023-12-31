export const state = () => ({
  wishlist: [],
});

export const mutations = {
  addToList(state, product) {
    if(!state.wishlist.includes(product)){
      state.wishlist.push(product);
    } else {
      state.wishlist = state.wishlist.filter((id) => id !== product);
    }
  }
}
