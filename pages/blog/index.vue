<template>
  <section class="section">
    <template v-for="article in articles">
      <section :key="article.slug" class="section article">
        <nuxt-link
          class="title"
          :to="`/blog/${article['category-slug']}/${article.slug}`"
        >
          {{ article.title }}
        </nuxt-link>
        <div>
          <nuxt-link
            class="category"
            :to="`/blog/${article['category-slug']}/`"
            title="Category"
          >
            <font-awesome-icon :icon="['fad', 'folders']" />
            {{ article.category }}
          </nuxt-link>
          <span class="time" title="Update date">
            <font-awesome-icon :icon="['fad', 'clock']" />
            {{ article.updatedAt | date }}
          </span>
        </div>
        <hr class="my-1" />
        <div class="content">{{ article.description }}</div>
        <nuxt-link
          class="more"
          :to="`/blog/${article['category-slug']}/${article.slug}`"
        >
          Read
        </nuxt-link>
      </section>
    </template>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Blog',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('updatedAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  head: {
    title: "Hans' Blog",
    meta: [
      { hid: 'description', name: 'description', content: 'List of posts' },
      { hid: 'og:title', property: 'og:title', content: "Hans' Blog" },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'List of posts',
      },
    ],
  },
})
</script>
