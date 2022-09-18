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
                v-model="user.email"
                id="email"
                class="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                @blur="v$.email.$touch()"
              >
              <div
                class="login__input-errors"
                v-for="error of v$.email.$errors"
                :key="error.$uid"
              >
                <div class="login__input-error-item">{{ error.$message }}</div>
              </div>
            </div>
            <div class="login__input-wrapper form__input-wrapper">
              <label for="password" class="visually-hidden">Password</label>
              <input
                v-model="user.password"
                id="password"
                class="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                @blur="v$.password.$touch()"
              >
              <div
                class="login__input-errors"
                v-for="error of v$.password.$errors"
                :key="error.$uid"
              >
                <div class="login__input-error-item">{{ error.$message }}</div>
              </div>
            </div>
            <button
              :disabled="v$.$invalid"
              class="login__submit form__submit button"
              type="submit"
            >
              Sign in
            </button>
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
import { defineComponent, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import PageHeader from '../PageHeader.vue';

export default defineComponent({
  components: { PageHeader },
  name: 'LoginPage',
  setup() {
    const user = reactive({
      email: '',
      password: '',
    });

    const rules = {
      password: { required },
      email: { required, email },
    };

    const v$ = useVuelidate(rules, user);

    return {
      user,
      v$,
    };
  },
});
</script>
<style scoped>
  .login__input + .login__input-errors {
    position: relative;
    margin: -20px 5px 20px;
    color: rgb(255, 34, 34);
    font-size: 11px;
  }
</style>
