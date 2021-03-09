<template>
  <div>

    <navbar />
    <modal />
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
import Modal from '~/components/shared/Modal'
import { mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Modal
  },
  fetch({store}){
    if(store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.items
             })
  }
}

</script>


