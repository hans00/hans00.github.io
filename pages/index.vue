<template>
  <div class="w-full md:flex">
    <section class="basic">
      <div class="info">
        <div class="photo">
          <img src="@/assets/photo.jpg" alt="My Photo" />
        </div>
        <h2 class="name">Hans</h2>
        <div class="social">
          <a
            title="GitHub"
            v-tooltip="'GitHub'"
            href="https://github.com/hans00/" target="_blank"
            style="color: #24292e"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            title="Facebook"
            v-tooltip="'Facebook'"
            href="https://fb.hans00.me" target="_blank"
            style="color: #3b5998"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </a>
          <a
            title="Kaggle"
            v-tooltip="'Kaggle'"
            href="https://www.kaggle.com/hans00" target="_blank"
            style="color: #20BEFF"
          >
            <font-awesome-icon
              :icon="['fab', 'kaggle']"
              :mask="['fas', 'circle']"
              transform="shrink-3.5"
              size="lg"
            />
          </a>
        </div>
      </div>
    </section>
    <section class="detail">
      <section id="skills">
        <h3 class="title">Skills</h3>
        <div class="data">
          <span v-tooltip="'PHP'" title="PHP" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'php']"
              style="color: #474A8A"
            />
            <span class="sr-only">PHP</span>
          </span>
          <span v-tooltip="'C++'" title="C++" class="mr-1">
            <cpp-icon class="inline align-top" style="height: 4em" />
            <span class="sr-only">C++</span>
          </span>
          <span v-tooltip="'Linux'" title="Linux" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'linux']"
              style="color: #333"
            />
            <span class="sr-only">Linux</span>
          </span>
          <span v-tooltip="'JavaScript'" title="JavaScript" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'js']"
              style="color: #F0DB4F"
            />
            <span class="sr-only">JavaScript</span>
          </span>
          <span v-tooltip="'Vue.js'" title="Vue.js" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'vuejs']"
              style="color: #41b883"
            />
            <span class="sr-only">Vue.js</span>
          </span>
          <span v-tooltip="'Python'" title="Python" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'python']"
              style="color: #306998"
            />
            <span class="sr-only">Python</span>
          </span>
          <span v-tooltip="'Cyber Security'" title="Cyber Security" class="mr-1">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fad', 'shield-check']"
              style="color: #333"
            />
            <span class="sr-only">Cyber Security</span>
          </span>
        </div>
      </section>
      <section>
        <h3 class="title">Titles</h3>
        <div class="data">
          <div v-for="title in about.titles">
            {{ title }}
          </div>
        </div>
      </section>
      <section id="experience">
        <h3 class="title">Experience</h3>
        <div class="data">
          <table>
            <tr v-for="experience in about.experiences">
              <th class="text-right">{{ experience.year }}</th>
              <td class="pl-2">{{ experience.content }}</td>
            </tr>
          </table>
        </div>
      </section>
      <section id="projects">
        <h3 class="title">Projects</h3>
        <div class="data">
          <template v-for="project in about.projects">
            <card :image="project.image">
              <template #title>
                <a
                  :href="project.link" target="_blank"
                  class="text-gray-800"
                >
                  {{ project.name }}
                  <font-awesome-icon :icon="['fad', 'external-link']" class="text-gray-600 text-sm" />
                </a>
                <div class="inline-block ml-2">
                  <template v-for="badge in project.badges">
                    <span
                      class="badge font-normal text-sm"
                      :class="badge.color"
                    >
                      {{ badge.text }}
                    </span>
                  </template>
                </div>
              </template>
              <template #content>
                <span class="whitespace-pre-wrap">{{ project.description.trim() }}</span>
              </template>
            </card>
          </template>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/Card.vue'
import CppIcon from '@/components/Cpp-Icon.vue'

export default Vue.extend({
  components: {
    Card,
    CppIcon,
  },
  data() {
    return {
      about: {
        experiences: [],
        titles: [],
        projects: [],
      },
    }
  },
  async asyncData({ $content }) {
    const about = await $content('about-me').fetch()

    return {
      about
    }
  },
})
</script>

<style scoped>
.basic {
  @apply w-1/3 p-5;
}
.basic .info {
  @apply text-center sticky top-2;
}
.basic .info .photo {
  @apply w-full rounded-full overflow-hidden;
  @apply shadow-md;
}
.basic .info .photo img {
  @apply w-full h-auto object-cover;
  @apply transition-transform duration-300;
}
.basic .info .photo:hover img {
  @apply transform scale-125;
}
.basic .info .name {
  @apply text-2xl font-bold text-gray-700;
}
.basic .info .social {
  @apply text-xl;
}
.basic .info .social a + a {
  @apply ml-1;
}

.detail {
  @apply w-2/3 p-5;
}
.detail .title {
  @apply text-gray-700 my-2 text-lg;
}
.detail .data {
  @apply pl-2 text-gray-900 text-base;
}

@media (max-width: 768px) {
  .basic,
  .detail {
    @apply w-full;
  }
}
</style>
