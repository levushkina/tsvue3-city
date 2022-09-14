<template>
  <div class="property__host-user user">
    <div
      class="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"
    >
      <img
        class="property__avatar user__avatar"
        :src="`../${host.avatarUrl}`"
        width="74"
        height="74"
        alt="Host avatar"
      >
    </div>
    <span class="property__user-name">
      {{host.name}}
    </span>
    <span
      v-if="host.isPro"
      class="property__user-status"
    >
      Pro
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { HotelHost } from '../models';

export default defineComponent({
  name: 'HostInfo',
  props: {
    host: {
      type: Object as PropType<HotelHost>,
      required: true,
    },
  },
});
</script>
