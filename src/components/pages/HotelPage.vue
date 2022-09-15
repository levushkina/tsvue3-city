<template>
  <page-header></page-header>
  <loading-screen v-if="hotelsIsLoading"></loading-screen>
  <hotel-card v-else :hotel="hotel"></hotel-card>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import PageHeader from '../PageHeader.vue';
import HotelCard from '../HotelCard.vue';
import LoadingScreen from '../LoadingScreen.vue';
import { Hotel } from '../../models';

export default defineComponent({
  components: {
    PageHeader,
    LoadingScreen,
    HotelCard,
  },
  name: 'HotelPage',
  setup() {
    const route = useRoute();
    const id = Number(route.params.id);
    const store = useStore();
    const hotelsIsLoading = computed(() => store.state.loadingInProccess
      || store.state.nearbyLoadingInProccess);

    const hotel = computed(() => store.state.hotels.find((item: Hotel) => item.id === id));

    onMounted(async () => {
      await store.dispatch('fetchReviews', id);
    });

    onMounted(async () => {
      await store.dispatch('fetchNearbyHotels', id);
    });

    return {
      hotelsIsLoading,
      hotel,
    };
  },
});
</script>
