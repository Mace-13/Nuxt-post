<template>
  <div>
    <navbar />
    <button type="button" class="btn btn-info ml-4">Create</button>
    <div class="container">
      <div
        v-for="post in posts"
        :key="post.id"
        class="card mb-3" >
        <h4 class="card-header">{{ post.title }}</h4>
        <div class="card-body">
          <h5 class="card-title">{{ post.subtitle}}</h5>
          <p class="card-text">{{ post.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts
             })
  }
}

</script>


