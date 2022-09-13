<template>
  <section class="cities__map map">
    <l-map
      :zoom="activeItem.location.zoom"
      :center="[activeItem.location.latitude, activeItem.location.longitude]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
      <l-marker
        v-for="hotel in hotels"
        :key="hotel.id"
        :lat-lng="[hotel.location.latitude, hotel.location.longitude]"
      >
        <l-icon :icon-url="hotel.id === activeItem.id ? iconUrlCurrent : iconUrl" />
      </l-marker>
    </l-map>
  </section>
</template>

<script>
import { computed } from 'vue';
import {
  LMap,
  LIcon,
  LMarker,
  LControlLayers,
  LTileLayer,
} from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const/common';

export default {
  name: 'LocationsMap',
  props: {
    hotels: Array,
    activeHotel: Object,
  },
  components: {
    LMap,
    LIcon,
    LMarker,
    LControlLayers,
    LTileLayer,
  },
  setup(props) {
    const iconUrl = URL_MARKER_DEFAULT;
    const iconUrlCurrent = URL_MARKER_CURRENT;
    const activeItem = computed(() => props.activeHotel || props.hotels[0]);

    return {
      iconUrl,
      iconUrlCurrent,
      activeItem,
    };
  },
};
</script>
