<template>
  <div>
    <template v-if="urlToImage">
      <img
        v-show="isImageLoaded"
        :src="urlToImage"
        :alt="alt"
        class="h-64 w-full object-cover transition-all duration-500"
        @load="imageLoadedHandler"
      />

      <div
        v-show="!isImageLoaded"
        class="flex flex-col items-center justify-center h-64"
      >
        <LoadingSpinner class="-mb-6" />
        <div class="text-sm text-gray-500">Loading image...</div>
      </div>
    </template>

    <div
      v-else
      class="noImagePlaceholder h-64 w-full transition-all duration-500 flex items-center justify-center text-4xl font-bold bg-gray-400 text-gray-100"
    >
      no image
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    LoadingSpinner,
  },
  props: {
    alt: {
      type: String,
      default: '',
    },
    urlToImage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isImageLoaded: false,
    }
  },
  methods: {
    imageLoadedHandler() {
      this.isImageLoaded = true
    },
  },
}
</script>
