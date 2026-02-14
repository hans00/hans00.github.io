<template>
  <section class="section">
    <template v-for="article in articles" :key="article._path">
      <section class="section article mb-8">
        <NuxtLink
          class="title text-2xl font-bold block hover:underline"
          :to="`/blog/${article.category}/${article._path.split('/').pop()}`"
        >
          {{ article.title }}
        </NuxtLink>
        <div class="flex items-center space-x-4 text-sm text-gray-600 my-2">
          <NuxtLink
            class="category"
            :to="`/blog/${article.category}/`"
            title="Category"
          >
            <font-awesome-icon :icon="['fad', 'folders']" />
            {{ formatCategory(article.category) }}
          </NuxtLink>
          <span class="time" title="Update date">
            <font-awesome-icon :icon="['fad', 'clock']" />
            {{ formatDate(article.date) }}
          </span>
        </div>
        <hr class="my-1 border-gray-200" />
        <div class="content text-gray-700 my-2">{{ article.description }}</div>
        <NuxtLink
          class="more text-blue-600 font-medium hover:text-blue-800"
          :to="`/blog/${article.category}/${article._path.split('/').pop()}`"
        >
          Read
        </NuxtLink>
      </section>
    </template>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const category = route.params.category as string

const { data: articles } = await useAsyncData(`category-${category}`, () => 
  queryContent('articles')
    .where({ category: { $eq: category } })
    .sort({ date: -1 })
    .find()
)

const formatCategory = (cat: string) => {
  if (!cat) return ''
  return cat.charAt(0).toUpperCase() + cat.slice(1)
}

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/')
}

useHead({
  title: `Category: ${formatCategory(category)} | Hans' Blog`,
  meta: [
    { name: 'description', content: 'List of posts' },
    { property: 'og:title', content: `Category: ${formatCategory(category)} | Hans' Blog` },
    { property: 'og:description', content: 'List of posts' },
  ],
})
</script>
