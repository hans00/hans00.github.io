<template>
  <div class="container mx-auto">
    <header>
      <div class="logo-area text-center pt-4 pb-3">
        <nuxt-link to="/" class="logo">Hans</nuxt-link>
      </div>
      <nav class="navbar">
        <nuxt-link to="/" class="nav-item" exact>
          Home
        </nuxt-link>
        <nuxt-link to="/blog/" class="nav-item">
          Blog
        </nuxt-link>
      </nav>
    </header>

    <nuxt class="pt-3 pb-16 px-5" />

    <a
      class="go-to-top"
      :class="{ show: enableScrollTop }"
      @click="scrollToTop"
    >
      <font-awesome-icon :icon="['fad', 'arrow-to-top']" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      enableScrollTop: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.enableScrollTop = scrollY > 100
    },
    scrollToTop() {
      scroll({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  head: {
    title: "Hans' homepage",
    meta: [
      { hid: 'charset', charset: 'utf-8' },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { hid: 'author', name: 'author', content: 'Hans' },
      { hid: 'description', name: 'description', content: "Hans' homepage" },
      { hid: 'og:title', property: 'og:title', content: "Hans' homepage" },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: "Hans' homepage",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Hans' homepage",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://secure.gravatar.com/avatar/193b9e6372680df1f91d0eb25be4c192',
      },
    ],
  },
})
</script>
