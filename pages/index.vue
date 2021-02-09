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
            class="tooltip"
            href="https://github.com/hans00/"
            target="_blank"
            style="color: #24292e;"
          >
            <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          </a>
          <a
            title="Facebook"
            class="tooltip"
            href="https://fb.hans00.me"
            target="_blank"
            style="color: #3b5998;"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </a>
          <a
            title="Kaggle"
            class="tooltip"
            href="https://www.kaggle.com/hans00"
            target="_blank"
            style="color: #20beff;"
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
          <span title="PHP" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'php']"
              style="color: #474a8a;"
            />
            <span class="sr-only">PHP</span>
          </span>
          <span title="C++" class="tooltip skill">
            <cpp-icon style="height: 4em;" />
            <span class="sr-only">C++</span>
          </span>
          <span title="Linux" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'linux']"
              style="color: #333;"
            />
            <span class="sr-only">Linux</span>
          </span>
          <span title="JavaScript" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'js']"
              style="color: #f0db4f;"
            />
            <span class="sr-only">JavaScript</span>
          </span>
          <span title="Vue.js" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'vuejs']"
              style="color: #41b883;"
            />
            <span class="sr-only">Vue.js</span>
          </span>
          <span title="Python" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fab', 'python']"
              style="color: #306998;"
            />
            <span class="sr-only">Python</span>
          </span>
          <span title="Cyber Security" class="tooltip skill">
            <font-awesome-icon
              class="fa-4x"
              :icon="['fad', 'shield-check']"
              style="color: #333;"
            />
            <span class="sr-only">Cyber Security</span>
          </span>
        </div>
      </section>
      <section>
        <h3 class="title">Titles</h3>
        <div class="data">
          <div v-for="(title, index) in about.titles" :key="`title_${index}`">
            {{ title }}
          </div>
        </div>
      </section>
      <section id="experience">
        <h3 class="title">Experience</h3>
        <div class="data">
          <table>
            <template v-for="(experience, index) in about.experiences">
              <tr :key="`exp_${index}`">
                <th class="text-right">{{ experience.year }}</th>
                <td class="pl-2"><render :content="experience.content" /></td>
              </tr>
            </template>
          </table>
        </div>
      </section>
      <section id="projects">
        <h3 class="title">Projects</h3>
        <div class="data">
          <template v-for="(project, index) in about.projects">
            <card :key="`project_${index}`" :image="project.image">
              <template #title>
                <a :href="project.link" target="_blank" class="text-gray-800">
                  {{ project.name }}
                  <font-awesome-icon
                    :icon="['fad', 'external-link']"
                    class="text-gray-600 text-sm"
                  />
                </a>
                <div class="inline-block ml-2">
                  <template v-for="(badge, badge_index) in project.badges">
                    <span
                      :key="`badge_${badge_index}`"
                      class="badge font-normal text-sm"
                      :class="badge.color"
                    >
                      {{ badge.text }}
                    </span>
                  </template>
                </div>
              </template>
              <template #content>
                <span class="whitespace-pre-wrap">{{
                  project.description | trim
                }}</span>
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
import Render from '@/components/Render.ts'
import Card from '@/components/Card.vue'
import CppIcon from '@/components/Cpp-Icon.vue'

export default Vue.extend({
  components: {
    Card,
    CppIcon,
    Render,
  },
  async asyncData({ $content }) {
    const about = await $content('about-me').fetch()

    return {
      about,
    }
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
  -webkit-mask-image: -webkit-radial-gradient(white, black);
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
.skill {
  @apply inline-block mr-1 mb-1 align-top;
}

@media (max-width: 768px) {
  .basic,
  .detail {
    @apply w-full;
  }
  #skills .data {
    @apply text-center;
  }
}
</style>
