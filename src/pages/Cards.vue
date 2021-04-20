<template>
  <div class="row">
    <Card :section="section" :posts="posts" /> 
  </div>
  <br />
  <br />
</template>

<script>
import Card from './Card.vue'
export default {
  name: "Cards",
  data: () => ({
    posts: [],
    section:''
  }),
  methods: {
    getPosts(slug) {
      fetch(`/content/content-${slug}.json`)
        .then((res) => res.json())
        .then((data) => (this.posts = data));
        this.section=slug
        
    },
  },
  watch: {
    "$route.params.cards": {
      handler(val) {
        this.getPosts(val);
      },
      deep: true,
      immediate: true,
    },
  },
  components: {
    Card,
  },
};
</script>

<style>
</style>