<template>
  <button class="place-card__bookmark-button button" type="button">
    <svg class="place-card__bookmark-icon" width="18" height="19">
      <use xlink:href="#icon-bookmark"></use>
    </svg>
    <span class="visually-hidden">To bookmarks</span>
  </button>
</template>
<script>
export default {
  name: 'BookmarkButton',
};
</script>
