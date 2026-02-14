<template>
  <div class="container mx-auto">
    <header>
      <div class="logo-area text-center pt-4 pb-3">
        <NuxtLink to="/" class="logo">Hans</NuxtLink>
      </div>
      <nav class="navbar">
        <NuxtLink to="/" class="nav-item" exact-active-class="exact-active">
          Home
        </NuxtLink>
        <NuxtLink to="/blog/" class="nav-item" active-class="active">
          Blog
        </NuxtLink>
      </nav>
    </header>

    <div class="pt-3 pb-16 px-5">
      <slot />
    </div>

    <a
      class="go-to-top"
      :class="{ show: enableScrollTop }"
      @click="scrollToTop"
    >
      <!-- Need to set up FontAwesome plugin first -->
       <font-awesome-icon :icon="['fad', 'arrow-to-top']" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'

const enableScrollTop = ref(false)

const handleScroll = () => {
  enableScrollTop.value = window.scrollY > 100
}

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useHead({
  title: "Hans' homepage",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Hans' },
    { name: 'description', content: "Hans' homepage" },
    { property: 'og:title', content: "Hans' homepage" },
    { property: 'og:site_name', content: "Hans' homepage" },
    { property: 'og:description', content: "Hans' homepage" },
    { property: 'og:image', content: 'https://secure.gravatar.com/avatar/193b9e6372680df1f91d0eb25be4c192' },
  ]
})
</script>
