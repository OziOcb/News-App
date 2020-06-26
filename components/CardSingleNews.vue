<template>
  <article class="article">
    <a
      :href="article.url"
      target="_blank"
      rel="noopener noreferrer"
      class="focus:outline-none"
    >
      <div class="h-64 w-full overflow-hidden">
        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          :alt="article.title"
          class="h-64 w-full object-cover transition-all duration-500"
        />
        <img
          v-else
          src="@/assets/img/no_image.jpg"
          :alt="article.title"
          class="h-64 w-full object-cover transition-all duration-500"
        />
      </div>

      <div class="p-6 mb-auto">
        <span
          class="inline-block bg-gray-400 text-gray-900 text-xs mb-2 py-1 pl-2 pr-4 rounded-r-full uppercase tracking-wide"
          >{{ article.publishedAt }}</span
        >
        <h2 class="font-semibold text-lg leading-tight mb-3">
          {{ article.title }}
        </h2>
        <p>{{ article.description }}</p>
      </div>
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

<style>
.article {
  @apply relative h-full bg-gray-200 pb-4 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-all duration-500 transform;
}

.article:hover,
.article:focus-within {
  @apply bg-gray-800 text-white shadow-2xl scale-105;
}

.article:hover img,
.article:focus-within img {
  transform: scale(1.1);
  filter: grayscale(1) brightness(0.4);
}
</style>
