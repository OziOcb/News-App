<template>
  <header class="fixed top-0 w-full z-10 bg-gray-400 p-6">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <nuxt-link
        class="text-gray-800 mr-6 font-semibold text-xl tracking-tight transition-colors duration-300 hover:text-white"
        to="/"
      >
        PAUL'S NEWS
      </nuxt-link>

      <button
        class="flex lg:hidden items-center px-3 py-2 text-gray-800 transition-colors duration-300 hover:text-white"
        @click="navToggleHandler"
      >
        <HamburgerMenu class="fill-current" />
      </button>

      <nav
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full lg:flex lg:w-auto"
      >
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
              {{ capitalizeFirstLetter(cat) }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import HamburgerMenu from '@/assets/icons/hamburgerMenu.svg?inline'

export default {
  components: {
    HamburgerMenu,
  },
  data() {
    return {
      isOpen: false,
      pickedCategory: 'all',
      categories: [
        'all',
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
      ],
    }
  },
  methods: {
    navToggleHandler() {
      this.isOpen = !this.isOpen
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    changeCategoryHandler(e) {
      const targetCategory = e.target.dataset.category
      if (!targetCategory) return
      this.pickedCategory = targetCategory
    },
  },
}
</script>
