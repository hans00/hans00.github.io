<template>
  <article v-if="article" class="article prose max-w-none">
    <h2 class="title text-3xl font-bold">{{ article.title }}</h2>
    <div class="flex items-center space-x-4 text-sm text-gray-600 my-4">
      <NuxtLink 
        :to="`/blog/${article.category}/`"
        class="category hover:underline"
      >
        <font-awesome-icon :icon="['fad', 'folders']" />
        {{ formatCategory(article.category) }}
      </NuxtLink>
      <span class="time" title="Update date">
        <font-awesome-icon :icon="['fad', 'clock']" />
        {{ formatDate(article.date) }}
      </span>
    </div>
    <hr class="my-4 border-gray-200" />
    <ContentRenderer :value="article" class="content" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const { category, slug } = route.params as { category: string; slug: string }

const { data: article } = await useAsyncData(`article-${slug}`, () => 
  queryContent('articles').where({ _stem: { $contains: slug } }).findOne()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const formatCategory = (cat: string) => {
  if (!cat) return ''
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/')
}

useHead({
  title: `${article.value?.title || ''} | Hans' Blog`,
  meta: [
    { name: 'description', content: article.value?.description || '' },
    { name: 'date.created', content: article.value?.createdAt || '' },
    { property: 'og:title', content: `${article.value?.title || ''} | Hans' Blog` },
    { property: 'og:description', content: article.value?.description || '' },
  ]
})
</script>
