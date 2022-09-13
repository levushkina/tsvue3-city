<template>
  <div className="page">
    <main className="page__main">
      <div className="container">
        <section>
          <h1>Loading ...</h1>
        </section>
      </div>
    </main>
    <page-footer></page-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageFooter from './PageFooter.vue';

export default defineComponent({
  name: 'LoadingScreen',
  components: { PageFooter },
});
</script>
