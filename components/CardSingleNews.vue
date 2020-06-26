<template>
  <article>
    <a :href="article.url" target="_blank" rel="noopener noreferrer">
      <img :src="article.urlToImage" :alt="article.title" />
      <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
      <footer>
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
