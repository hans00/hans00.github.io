<template>
  <p v-if="typeof content === 'string'">{{ content }}</p>
  <p v-else class="rendered-object">
    <template v-for="(elem, idx) in content" :key="idx">
      <span v-if="elem.text">{{ elem.text }} </span>
      <a v-else-if="elem.link" :href="elem.link.url">{{ elem.link.text }}</a>
    </template>
  </p>
</template>

<script setup lang="ts">
type ContentItem = { text?: string; link?: { url: string; text: string } }

defineProps<{
  content: string | ContentItem[]
}>()
</script>
