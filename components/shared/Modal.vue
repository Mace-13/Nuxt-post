<template>
  <div>
    <button @click="isActive = true" type="button" class="btn btn-info mt-4 ml-4">Create</button>
    <div :class="{'show': isShow}" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button @click="isActive = false" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button @click="isActive = false" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data (){
    return {
      isShow: false
    }
  }
}
</script>
