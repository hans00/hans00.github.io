<template>
  <article class="article">
    <h2 class="title">{{ article.title }}</h2>
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
    <nuxt-content class="content" :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import Prism from "prismjs"
//languages
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-qml'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-ini'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-makefile'
import 'prismjs/components/prism-cmake'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-php-extras'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-typescript'
//plugins
import "prismjs/plugins/line-numbers/prism-line-numbers"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"

import categoryMap from '@/categories.ts'

export default Vue.extend({
  name: 'Article',
  data() {
    return {
      article: {
        title: '',
        description: '',
        createdAt: new Date(0),
      },
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug)
        .where({ 'category': categoryMap[params.category] })
        .fetch()

      return {
        article,
      }
    } catch {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  head(): {[index: string]: any} {
    const title = `${this.article.title} | Hans' Blog`
    return {
      title,
      meta: [
        {
          hid: "date.created",
          name: "date.created",
          content: new Date(this.article.createdAt).toISOString().slice(0, 10),
        },
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
  },
})
</script>
