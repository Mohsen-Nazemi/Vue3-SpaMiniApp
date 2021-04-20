<template>
  <div
      class="card mx-2"
      style="width: 18rem"
      v-for="post in posts"
      :key="post.id"
    >
      <img :src="post.imgurl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.description }}</p>
        <router-link :to="'/'+section+'/' + post.id" class="btn btn-primary"
          >نمایش کامل مقاله</router-link>
      </div>
    </div>
</template>

<script>
export default {
    name:'Card',
    props:{
        section:String,
        posts:Object
    },
    

}
</script>

<style>

</style>