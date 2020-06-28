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
        <HamburgerMenuSvg class="fill-current" />
      </button>

      <TheMainNav
        :class="isOpen ? 'block' : 'hidden'"
        @close-main-menu="isOpen = false"
      />
    </div>
  </header>
</template>

<script>
import TheMainNav from '@/components/TheMainNav.vue'
import HamburgerMenuSvg from '@/assets/icons/hamburgerMenu.svg?inline'

export default {
  components: {
    HamburgerMenuSvg,
    TheMainNav,
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
