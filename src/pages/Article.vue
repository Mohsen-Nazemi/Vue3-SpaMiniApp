<template>
  <div>
      <div v-if="post">
          <img :src="post.imgurl" width="200">
          <h1>{{ post.title }}</h1>
          <p>{{ post.description }}</p>
      </div>
  </div>
  
</template>

<script>
export default {
    data() {
      
      return {
        post: {},
      }
    },
    methods: {
      getPost() {
        fetch(`/content/content-${this.$route.params.article}.json`)
        .then((res) => res.json())
        .then((data) => {
            this.post = data.find((article) => article.id == this.$route.params.id);
            
        });
      }
    },
    created() {
      this.getPost()
    }
 
};
</script>

<style>
</style>