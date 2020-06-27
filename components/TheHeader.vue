<template>
  <nav class="fixed top-0 w-full z-10 bg-gray-400 p-6">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <nuxt-link
        class="text-gray-800 mr-6 font-semibold text-xl tracking-tight transition-colors duration-300 hover:text-white"
        to="/"
      >
        PAUL'S NEWS
      </nuxt-link>

      <div class="block sm:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 transition-colors duration-300 hover:text-white hover:border-white"
          @click="navToggleHandler"
        >
          ham
        </button>
      </div>

      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="w-full sm:flex sm:w-auto"
      >
        <div class="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-lighter hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-gray-lighter hover:text-white mr-4"
          >
            Examples
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
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
