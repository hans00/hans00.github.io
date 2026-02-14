<template>
  <div class="mermaid">{{code}}</div>
</template>

<script lang="ts">
import Vue from "vue"
import type { Mermaid } from "mermaid"

let mermaid: Mermaid | undefined
if (process.client) {
  mermaid = require("mermaid")
}

export default Vue.extend({
  name: "VueMermaid",
  props: {
    code: {
      type: String,
      default: "",
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    },
    defaultConfig: {
      type: Object,
      default() {
        return { theme: "default", startOnLoad: false, securityLevel: "loose" }
      }
    },
    stopOnError: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.init()
    this.load()
  },
  updated() {
    this.load()
  },
  methods: {
    init() {
      mermaid?.initialize(Object.assign(this.defaultConfig, this.config))
    },
    load() {
      const container = this.$el as HTMLElement
      if (this.code) {
        container.removeAttribute("data-processed")
        if (container.childNodes.length) {
          container.replaceChild(
            document.createTextNode(this.code),
            container.childNodes[0]
          )
        } else {

        }
        try {
          mermaid?.init(this.code, container)
        } catch (error) {
          if (this.stopOnError) {
            throw error
          }
        }
      }
    },
  }
});
</script>
