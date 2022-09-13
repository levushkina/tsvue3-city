<template>
  <div class="page page--gray page--login">
    <page-header></page-header>
    <main class="page__main page__main--login">
      <div class="page__login-container container">
        <section class="login">
          <h1 class="login__title">Sign in</h1>
          <form class="login__form form" action="#" method="post">
            <div class="login__input-wrapper form__input-wrapper">
              <label for="email" class="visually-hidden">E-mail</label>
              <input
                id="email"
                class="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              >
            </div>
            <div class="login__input-wrapper form__input-wrapper">
              <label for="password" class="visually-hidden">Password</label>
              <input
                id="password"
                class="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              >
            </div>
            <button class="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section class="locations locations--login locations--current">
          <div class="locations__item">
            <a class="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from '../PageHeader.vue';

export default defineComponent({
  components: { PageHeader },
  name: 'LoginPage',
});
</script>
