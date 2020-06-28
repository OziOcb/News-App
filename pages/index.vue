<template>
  <div class="container mx-auto px-2 sm:px-0">
    <ul
      v-if="!getIsFetching"
      class="mt-32 grid row-gap-12 sm:grid-cols-2 xl:grid-cols-3 sm:col-gap-6"
    >
      <li v-for="(article, index) in getArticles" :key="index">
        <CardSingleNews :article="article" />
      </li>
    </ul>

    <div v-else class="h-screen w-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardSingleNews from '@/components/CardSingleNews.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default {
  components: {
    CardSingleNews,
    LoadingSpinner,
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
    ...mapGetters(['getArticles', 'getIsFetching']),
  },
  mounted() {
    this.setArticles(this.params)
  },
  methods: {
    ...mapActions(['setArticles']),
  },
}
</script>
