<template>
  <div ref="container" class="mermaid">
    <slot />
  </div>
</template>

<script setup lang="ts">
import mermaid from 'mermaid'
import { onMounted, ref, useSlots } from 'vue'

const container = ref<HTMLElement | null>(null)
const slots = useSlots()

onMounted(async () => {
  if (container.value) {
    mermaid.initialize({ startOnLoad: false })
    
    // Get the raw code from the default slot. 
    // Nuxt Content usually parses this into an AST, but we need the raw string.
    // If it's passed as a prop 'code', we use that.
    // If it rendered text inside, we grab that.
    
    let code = props.code || ''
    if (!code && slots.default) {
        // This is tricky in SSR hydration. We check innerText.
        code = container.value.innerText
    }

    if (code) {
        // Render needs a unique ID
        const id = `mermaid-${Math.floor(Math.random() * 10000)}`
        try {
            const { svg } = await mermaid.render(id, code)
            container.value.innerHTML = svg
        } catch (e) {
            console.error('Mermaid render error:', e)
            container.value.innerHTML = `<pre class="text-red-500">${e}</pre>`
        }
    }
  }
})

const props = defineProps<{
  code?: string
}>()
</script>

<style scoped>
.mermaid {
  @apply my-4 overflow-x-auto;
}
</style>
