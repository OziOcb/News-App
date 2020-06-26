<template>
  <div class="container mx-auto">
    <button @click="setArticlesHandler">hit me</button>

    <ul class="grid row-gap-12 sm:grid-cols-2 xl:grid-cols-3 sm:col-gap-6">
      <li v-for="(article, index) in getArticles" :key="index">
        <CardSingleNews :article="article" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardSingleNews from '@/components/CardSingleNews.vue'

export default {
  components: {
    CardSingleNews,
  },
  data() {
    return {
      params: {
        country: '',
        category: '',
      },
    }
  },
  computed: {
    ...mapGetters(['getArticles']),
  },
  mounted() {
    this.setArticles(this.params)
  },
  methods: {
    ...mapActions(['setArticles']),

    setArticlesHandler() {
      this.setArticles(this.params)
    },
  },
}
</script>
