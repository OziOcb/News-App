<template>
  <article
    class="h-full bg-gray-200 pb-12 sm:pb-8 shadow-lg rounded-lg overflow-hidden relative hover:bg-gray-800 hover:text-white transition-all duration-500 transform hover:scale-105 cursor-pointer"
  >
    <a :href="article.url" target="_blank" rel="noopener noreferrer">
      <img
        v-if="article.urlToImage"
        :src="article.urlToImage"
        :alt="article.title"
        class="h-48 w-full object-cover"
      />
      <img
        v-else
        src="@/assets/img/no_image.jpg"
        :alt="article.title"
        class="h-48 w-full object-cover"
      />

      <div class="p-6 mb-auto">
        <h2 class="font-semibold text-lg leading-tight mb-3">
          {{ article.title }}
        </h2>
        <p>{{ article.description }}</p>
      </div>

      <footer class="absolute bottom-0 w-full text-center">
        {{ article.publishedAt }}
      </footer>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
