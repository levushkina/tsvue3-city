<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './assets/css/main.css';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    onMounted(async () => { store.dispatch('fetchHotels'); });
  },
});
</script>
