<template>
  <div class="card">
    <div v-if="image" class="image">
      <v-lazy-image :src="image" />
    </div>
    <div class="body">
      <div class="mb-1">
        <div class="text-gray-900 font-bold text-xl mb-2">
          <slot name="title"></slot>
        </div>
        <p class="text-gray-700 text-base"><slot name="content"></slot></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: {
      type: String,
      default: '',
    },
  },
})
</script>

<style>
.card {
  @apply max-w-sm w-full mb-2;
}
@screen lg {
  .card {
    @apply max-w-full flex;
  }
}
.card .image {
  @apply flex-none;
  @apply h-48 w-full;
  @apply rounded-t text-center overflow-hidden;
  @apply border border-b-0 border-gray-400;
}
@screen lg {
  .card .image {
    @apply h-auto w-48;
    @apply rounded-t-none rounded-l;
    @apply border-b border-r-0;
  }
}
.card .image img {
  @apply object-cover w-full h-auto;
  @apply transition-transform duration-300 transform;
}
.card:hover .image img {
  @apply scale-125;
}
.card .body {
  @apply h-auto;
  @apply bg-white p-4 flex flex-col justify-between leading-normal;
  @apply border border-gray-400;
  @apply rounded;
}
.card .image + .body {
  @apply rounded-t-none border-t-0;
}
@screen lg {
  .card .image + .body {
    @apply border-l-0 rounded-l-none rounded-t border-t;
  }
}
</style>
