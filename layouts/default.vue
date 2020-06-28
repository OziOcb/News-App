<template>
  <div class="overflow-x-hidden">
    <TheHeader />

    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    TheHeader,
  },
}
</script>
