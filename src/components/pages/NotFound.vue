<template>
  <div className="page">
    <page-header></page-header>
    <main className="page__main">
      <div className="container">
        <h2>Page not found!</h2>
        <Link to="/">Back to main page</Link>
      </div>
    </main>
    <page-footer></page-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '../PageHeader.vue';
import PageFooter from '../PageFooter.vue';

export default defineComponent({
  components: { PageHeader, PageFooter },
  name: 'NotFound',
});
</script>
