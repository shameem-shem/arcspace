<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->
    <q-form>
      <q-input outlined :error="false" v-model="userName"></q-input>
      <q-input
        type="email"
        outlined
        :error="false"
        v-model="userEmail"
      ></q-input>
      <q-input
        type="password"
        outlined
        :error="false"
        v-model="password"
      ></q-input>
      <!-- <q-btn type="submit" outlined>Login</q-btn> -->
      <q-btn type="submit" outlined @click.prevent="firebaseSignup"
        >Signup</q-btn
      >
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { userRegistration } from "../auth/auth";
export default defineComponent({
  name: "PageIndex",
  setup() {
    const userName = ref(null);
    const userEmail = ref(null);
    const password = ref(null);
    return {
      userName,
      userEmail,
      password,
      firebaseSignup() {
        userRegistration(userName, userEmail, password);
      },
    };
  },
});
</script>
