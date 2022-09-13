<template>
  <div class="page page--gray page--main">
    <page-header></page-header>
    <loading-screen v-if="hotelsIsLoading"></loading-screen>
    <main v-else
      class="page__main page__main--index">
      <h1 class="visually-hidden">Cities</h1>
      <hotels-locations
        :locations="locations"
        :currentCity="currentCity"
        @currentCityChange="updateCurrentCity($event)"
      ></hotels-locations>
      <hotels-list
        v-if="hotels.length > 0"
        :hotels="hotels"
        :currentCity="currentCity"
        :currentSortType="currentSortType"
        @sortOptionChange="updateSortType($event)"
      ></hotels-list>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import PageHeader from '../PageHeader.vue';
import HotelsList from '../HotelsList.vue';
import HotelsLocations from '../HotelsLocations.vue';
import LoadingScreen from '../LoadingScreen.vue';
import { Hotel } from '../../models';
import { CITIES as locations, DEFAULT_CITY, sortOption } from '../../const/common';
import { filterHotelsByCity, sortHotels } from '../../utils/common';

export default defineComponent({
  name: 'MainPage',
  components: {
    HotelsLocations,
    HotelsList,
    PageHeader,
    LoadingScreen,
  },
  setup() {
    const store = useStore();
    const hotelsIsLoading = computed(() => store.state.loadingInProccess);
    const currentCity = ref(DEFAULT_CITY);

    const updateCurrentCity = (city: string) => {
      currentCity.value = city;
    };

    const currentSortType = ref(sortOption.DEFAULT);
    const updateSortType = (type: string) => {
      currentSortType.value = type;
    };

    const hotels = computed(
      (): Hotel[] => sortHotels(
        currentSortType.value,
        filterHotelsByCity(currentCity.value, store.state.hotels),
      ),
    );

    return {
      hotels,
      locations,
      currentCity,
      updateCurrentCity,
      currentSortType,
      updateSortType,
      hotelsIsLoading,
    };
  },
});
</script>
