<template>
  <div class="container">
    <router-link to="/" class="btn btn-success m-3 p-2"
      >برگشت به صفحه اصلی</router-link
    >
    <br />
    <router-link to="/science" class="btn btn btn-warning m-3 p-2"
      >گروه مقاله علمی</router-link
    >
    <router-link to="/sport" class="btn btn btn-warning m-3 p-2"
      >گروه مقاله ورزشی</router-link>

    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>
