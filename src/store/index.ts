import { createStore } from 'vuex';
import { convertSnekeToCamelCase } from '../utils/common';
import { Hotel } from '../models';
import { BACKEND_URL, APIRoute } from '../const/routes';

export default createStore({
  state: {
    hotels: [] as Hotel[],
    loadingInProccess: false,
  },
  mutations: {
    updateHotels(state, hotels: Hotel[]) {
      state.hotels = hotels;
    },
    toggleLoadingProccess(state, isLoading) {
      state.loadingInProccess = isLoading;
    },
  },
  actions: {
    async fetchHotels(context) {
      context.commit('toggleLoadingProccess', true);
      const res = await fetch(`${BACKEND_URL}${APIRoute.OFFERS}`);
      const hotels = await res.json();
      context.commit('updateHotels', convertSnekeToCamelCase(hotels));
      context.commit('toggleLoadingProccess', false);
    },
  },
  getters: {
  },
});
