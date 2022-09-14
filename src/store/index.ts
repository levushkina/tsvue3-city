import { createStore } from 'vuex';
import { convertSnekeToCamelCase } from '../utils/common';
import { Hotel, Reviews } from '../models';
import { BACKEND_URL, APIRoute } from '../const/routes';

export default createStore({
  state: {
    hotels: [] as Hotel[],
    loadingInProccess: false,
    reviews: [] as Reviews[],
  },
  mutations: {
    updateHotels(state, hotels: Hotel[]) {
      state.hotels = hotels;
    },
    toggleLoadingProccess(state, isLoading) {
      state.loadingInProccess = isLoading;
    },
    updateReviews(state, reviews: Reviews[]) {
      state.reviews = reviews;
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
    async fetchReviews(context, id) {
      const res = await fetch(`${BACKEND_URL}${APIRoute.REVIEWS}/${id}`);
      const reviews = await res.json();
      context.commit('updateReviews', convertSnekeToCamelCase(reviews));
    },
  },
  getters: {
  },
});
