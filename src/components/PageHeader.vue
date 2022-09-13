<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <router-link :to="{name: 'main'}" class="header__logo-link header__logo-link--active">
            <img
              class="header__logo"
              src="../assets/img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            >
          </router-link>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item user">
              <router-link
                :to="{name: 'favorites'}"
                class="header__nav-link header__nav-link--profile"
              >
                <div class="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
              </router-link>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-link" href="#">
                <span class="header__signout">Sign out</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
});
</script>
