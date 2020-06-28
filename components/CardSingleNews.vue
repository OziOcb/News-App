<template>
  <article class="article">
    <a
      :href="article.url"
      target="_blank"
      rel="noopener noreferrer"
      class="focus:outline-none"
    >
      <ImageSingleNews
        :url-to-image="article.urlToImage"
        :alt="article.title"
      />

      <div class="p-6 mb-auto">
        <span
          class="inline-block bg-gray-400 text-gray-900 text-xs mb-2 py-1 pl-2 pr-4 rounded-r-full uppercase tracking-wide"
        >
          {{ displayTimeAgo(article.publishedAt) }}
        </span>

        <h2 class="font-semibold text-lg leading-tight mb-3">
          {{ article.title }}
        </h2>

        <p>{{ article.description }}</p>
      </div>
    </a>
  </article>
</template>

<script>
import timeAgo from '@/utils/timeAgo'
import ImageSingleNews from '@/components/ImageSingleNews.vue'

export default {
  components: {
    ImageSingleNews,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  methods: {
    displayTimeAgo(date) {
      return timeAgo(date.toString())
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
.article:focus-within img,
.article:hover .noImagePlaceholder,
.article:focus-within .noImagePlaceholder {
  transform: scale(1.1);
  filter: grayscale(1) brightness(0.4);
}
</style>
