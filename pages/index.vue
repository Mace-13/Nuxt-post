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
          :subtitle="post.subtitle" />

      </div>
    </div>
  </div>

</template>

<script>
import Navbar from '~/components/navbar'
import PostItem from "~/components/PostItem";

export default {
  component: {
    Navbar,
    PostItem
  },
  data (){
    return {
      title: 'My title from Page',
      posts: [
        {
          id: '1',
          title: 'My first post',
          subtitle: 'My first subtitle',
        },
        {
          id: '2',
          title: 'My second post',
          subtitle: 'My second subtitle',
        },
        {
          id: '3',
          title: 'My third post',
          subtitle: 'My third subtitle',
        }
      ]
    }
  }
}
</script>

<style>

</style>
