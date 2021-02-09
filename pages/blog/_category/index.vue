<template>
  <section class="section">
    <template v-for="article in articles">
      <section :key="article.slug" class="section article">
        <nuxt-link
          class="title"
          :to="`/blog/${article.category}/${article.slug}`"
        >
          {{ article.title }}
        </nuxt-link>
        <div>
          <nuxt-link
            class="category"
            :to="`/blog/${article.category}/`"
            title="Category"
          >
            <font-awesome-icon :icon="['fad', 'folders']" />
            {{ article.category | category }}
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
          :to="`/blog/${article.category}/${article.slug}`"
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
  name: 'Category',
  async asyncData({ $content, params, error }) {
    try {
      const articles = await $content('articles')
        .where({ category: params.category })
        .sortBy('updatedAt', 'desc')
        .fetch()

      return {
        articles,
      }
    } catch {
      error({ statusCode: 404, message: 'Category not found' })
    }
  },
  head(): { [index: string]: any } {
    const title = `Category: ${
      this.$options.filters.category(this.$route.params.category)
    } | Hans' Blog`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: 'List of posts' },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'List of posts',
        },
      ],
    }
  },
})
</script>
