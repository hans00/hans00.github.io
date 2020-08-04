<template>
  <div class="w-full md:flex">
    <section class="basic">
      <div class="info">
        <img src="@/assets/photo.jpg" class="photo" alt="My Photo" />
        <h2 class="name">Hans</h2>
        <div class="social">
          <a
            title="GitHub"
            v-tooltip="'GitHub'"
            href="https://github.com/hans00/" target="_blank"
            style="color: #24292e"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            title="Facebook"
            v-tooltip="'Facebook'"
            href="https://fb.hans00.me" target="_blank"
            style="color: #3b5998"
          >
            <font-awesome-icon :icon="['fab', 'facebook']" />
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
            <font-awesome-layers class="fa-4x" style="color: #02326F">
              <font-awesome-icon
                :icon="['fab', 'cuttlefish']"
                transform="shrink-5 left-3"
              />
              <font-awesome-icon
                :icon="['fal', 'plus']"
                transform="shrink-12 right-3"
              />
              <font-awesome-icon
                :icon="['fal', 'plus']"
                transform="shrink-12 right-5"
              />
            </font-awesome-layers>
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
        <h3 class="title">Organization</h3>
        <div class="data">
          <ul>
            <li>社團法人臺灣校園資訊安全推廣暨駭客培育協會</li>
          </ul>
        </div>
      </section>
      <section id="experience">
        <h3 class="title">Experience</h3>
        <div class="data">
          <ol>
            <li>
              Won the Taiwan local LEGO WRO contest.
              <span class="badge">2013</span>
            </li>
            <li>
              Manage shared hosting server.
              <span class="badge">2014 ~ 2015</span>
            </li>
            <li>
              Work for RemoteSpark Inc.
              <span class="badge">2015</span>
            </li>
            <li>
              Won the self-drive car contest. (Arduino)
              <span class="badge">2016</span>
            </li>
            <li>
              Work for Leukocyte Lab Co., Ltd.
              <span class="badge">2018 ~ 2019</span>
            </li>
          </ol>
        </div>
      </section>
      <section id="projects">
        <h3 class="title">Projects</h3>
        <div class="data">
          <card>
            <template #title>
              <a href="https://github.com/hans00/MyLHU" target="_blank">
                My LHU
                <font-awesome-icon :icon="['fad', 'external-link']" class="text-gray-600 text-sm" />
              </a>
              <div class="inline-block ml-2">
                <span class="badge orange font-normal text-sm">Not In Maintain</span>
              </div>
            </template>
            <template #content>
              <p>A tool for LHU students.</p>
              <p>Using Node.js and Vue.js. And user data only in session.</p>
            </template>
          </card>
          <card>
            <template #title>
              <a href="https://github.com/hans00/envoy-ModSecurity" target="_blank">
                envoy ModSecurity
                <font-awesome-icon :icon="['fad', 'external-link']" class="text-gray-600 text-sm" />
              </a>
            </template>
            <template #content>
              <p>ModSecurity filter for envoy proxy.</p>
              <p>I'm reasearching for high performance reverse proxy and WAF solution. But original repository seems not in maintain, so I forked.</p>
            </template>
          </card>
          <card>
            <template #title>
              <a href="https://github.com/hans00/fastWS" target="_blank">
                Fast WS
                <font-awesome-icon :icon="['fad', 'external-link']" class="text-gray-600 text-sm" />
              </a>
              <div class="inline-block ml-2">
                <span class="badge yellow font-normal text-sm">WIP</span>
              </div>
            </template>
            <template #content>
              <p>A high-performance HTTP server.</p>
              <p>Using uWebSockets. And the HTTP API compatible Express.js.</p>
            </template>
          </card>
          <card image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/240px-WordPress_blue_logo.svg.png">
            <template #title>
              <a href="https://github.com/hans00/WordPress_Optimization" target="_blank">
                WordPress Optimization
                <font-awesome-icon :icon="['fad', 'external-link']" class="text-gray-600 text-sm" />
              </a>
            </template>
            <template #content>
              <p>Trying to optomize WordPress.</p>
              <p></p>
              <p>Provide two solution.</p>
              <p> - Ngingx with PHP-FPM, Redis and MariaDB</p>
              <p> - OpenLiteSpeed with Redis and MariaDB</p>
            </template>
          </card>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '@/components/Card.vue'

export default Vue.extend({
  components: {
    Card,
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
  @apply rounded-full object-cover;
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
  @apply text-gray-700 my-2;
}
.detail .data {
  @apply pl-2;
}

@media (max-width: 768px) {
  .basic,
  .detail {
    @apply w-full;
  }
}
</style>
