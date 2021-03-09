<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      Nuxt Posts
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" v-trigger-collapse="`collapse`"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/manage">Posts</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', ()=>{
          nav.classList.remove('show')
        })
        const nav = document.querySelector(`#${binding.value}`)
        el.addEventListener('click', (e)=> {
          if(nav.classList.contains('show')){
            nav.classList.remove('show')
          }else {
            nav.classList.add('show')
          }
          e.stopPropagation()
        });
      }
    }
  }
}
</script>

