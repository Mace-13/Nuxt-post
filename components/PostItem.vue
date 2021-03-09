<template>
  <div class="card mb-3">
    <h4 class="card-header">{{ title }}</h4>
    <div class="card-body">
      <h5 class="card-title">{{ subtitle }}</h5>
      <p class="card-text">
        {{ text }}

        {{ date | formatDate}}
      </p>
      <label class="checkbox mt-3 float-right">
        <input type="checkbox" :checked="isRead">
        Read
      </label>
      <a href="#" class="btn btn-primary mt-2">See More</a>
    </div>
  </div>
</template>

<script>
import moment from "moment"
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false,
      default: new Date()
    },
    isRead: {
      type: Boolean,
      required: false
    }
  }

}
</script>
