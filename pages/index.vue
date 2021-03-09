<template>
  <div>
    <navbar />
    <div class="container justify-content align-items">
      <div class="title mt-5">
        <h2>Newest Post</h2>
      </div>
      <div class="post-container d-flex flex-column mt-4">
        <post-item
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :subtitle="post.subtitle"
          :text="post.text"
          :date="post.createdAt"
          :isRead="post.isRead"
        />


      </div>

    </div>
  </div>

</template>

<script>
import Navbar from '~/components/navbar'
import PostItem from "~/components/PostItem"
import { fetchPostsAPI } from "~/store/post";

export default {
  component: {
    Navbar,
    PostItem
  },
  data (){
    return {
      title: 'My title from Page',
    }
  },
  fetch({store}){
    if(store.getters['post/hasEmptyItems']){
      return store.dispatch('post/fetchPosts')
    }
  },
 computed: {
    posts() {
      return this.$store.state.post.items
    }
 }
}
</script>

<style>

</style>
