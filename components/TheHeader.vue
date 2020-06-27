<template>
  <nav class="fixed top-0 w-full z-10 bg-gray-400 p-6">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <nuxt-link
        class="text-gray-800 mr-6 font-semibold text-xl tracking-tight transition-colors duration-300 hover:text-white"
        to="/"
      >
        PAUL'S NEWS
      </nuxt-link>

      <button
        class="flex sm:hidden items-center px-3 py-2 text-gray-800 transition-colors duration-300 hover:text-white"
        @click="navToggleHandler"
      >
        <HamburgerMenu class="fill-current" />
      </button>

      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full sm:flex sm:w-auto"
      >
        <div class="sm:flex-grow">
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-lighter transition-colors duration-300 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-lighter transition-colors duration-300 hover:text-white mr-4"
          >
            Examples
          </a>
        </div>
      </div>
    </div>
  </nav>
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
    }
  },
  methods: {
    navToggleHandler() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
