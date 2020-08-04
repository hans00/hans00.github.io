<template>
  <div class="max-w-sm w-full lg:max-w-full lg:flex mb-2">
    <img class="h-48 w-full lg:h-auto lg:w-48 flex-none object-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border border-b-0 lg:border-b lg:border-r-0 border-gray-400" :src="image" v-if="image" />
    <div class="border-r border-b border-l border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal" :class="!image ? 'rounded-t lg:rounded-t-none lg:rounded-l border-t' : 'lg:border-l-0 lg:border-t'">
      <div class="mb-1">
        <div class="text-gray-900 font-bold text-xl mb-2"><slot name="title"></slot></div>
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
      default: "",
    },
  },
})
</script>
