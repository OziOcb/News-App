<template>
  <nav class="w-full lg:flex lg:w-auto">
    <ul @click.prevent="changeCategoryHandler">
      <li
        v-for="(cat, index) in categories"
        :key="index"
        class="no-underline block mt-4 lg:inline-block lg:mt-0 lg:mr-2 text-gray-lighter transition-colors duration-300 hover:text-white hover:bg-gray-600"
      >
        <a
          href="/"
          :data-category="cat"
          class="block text-center py-2 lg:px-2"
          :class="{ 'text-white bg-gray-700': cat === pickedCategory }"
        >
          {{ cat ? capitalizeFirstLetter(cat) : 'All' }}
        </a>
      </li>

      <li
        class="relative no-underline block mt-4 lg:inline-block lg:mt-0 lg:mr-2 text-gray-lighter transition-colors duration-300 hover:text-white hover:bg-gray-600"
      >
        <select
          v-model="pickedCountry"
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          @change="changeCountryHandler"
        >
          <option
            v-for="(country, index) in countries"
            :key="index"
            :value="country"
          >
            {{ country }}
          </option>
        </select>

        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <DownArrowSvg />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter'
import DownArrowSvg from '@/assets/icons/downArrow.svg?inline'

export default {
  components: {
    DownArrowSvg,
  },
  data() {
    return {
      pickedCategory: '',
      pickedCountry: 'gb',
      categories: [
        '',
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
      ],
      countries: [
        'ae',
        'ar',
        'at',
        'au',
        'be',
        'bg',
        'br',
        'ca',
        'ch',
        'cn',
        'co',
        'cu',
        'cz',
        'de',
        'eg',
        'fr',
        'gb',
        'gr',
        'hk',
        'hu',
        'id',
        'ie',
        'il',
        'in',
        'it',
        'jp',
        'kr',
        'lt',
        'lv',
        'ma',
        'mx',
        'my',
        'ng',
        'nl',
        'no',
        'nz',
        'ph',
        'pl',
        'pt',
        'ro',
        'rs',
        'ru',
        'sa',
        'se',
        'sg',
        'si',
        'sk',
        'th',
        'tr',
        'tw',
        'ua',
        'us',
        've',
        'za',
      ],
    }
  },
  methods: {
    ...mapActions(['setArticles']),

    changeCategoryHandler(e) {
      const targetCategory = e.target.dataset.category
      if (
        typeof targetCategory === 'undefined' ||
        targetCategory === this.pickedCategory
      )
        return

      this.pickedCategory = targetCategory
      this.changeArticles()
    },

    changeCountryHandler() {
      this.changeArticles()
    },

    changeArticles() {
      this.setArticles({
        country: this.pickedCountry,
        category: this.pickedCategory,
      })

      this.$emit('close-main-menu')
    },

    capitalizeFirstLetter(string) {
      return capitalizeFirstLetter(string)
    },
  },
}
</script>
