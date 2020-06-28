<template>
  <header class="fixed top-0 w-full z-10 bg-gray-400 p-6">
    <div class="container mx-auto flex items-center justify-between flex-wrap">
      <h1>
        <nuxt-link
          class="text-gray-800 mr-6 font-thin text-2xl tracking-tight transition-colors duration-300 hover:text-white"
          to="/"
        >
          NEWS<span class="font-semibold">LIVE</span>.co.uk
        </nuxt-link>
      </h1>

      <button
        ref="toggleButton"
        data-toggle="collapse"
        data-target="#theMainNav"
        aria-controls="theMainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="flex lg:hidden items-center px-3 py-2 text-gray-800 transition-colors duration-300 hover:text-white"
        @click="navToggleHandler"
      >
        <HamburgerMenuSvg class="fill-current" />
      </button>

      <TheMainNav
        id="theMainNav"
        :class="isOpen ? 'block' : 'hidden'"
        @close-main-menu="closeNavHandler"
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
    closeNavHandler() {
      this.$refs.toggleButton.setAttribute('aria-expanded', false)
      this.isOpen = false
    },

    navToggleHandler() {
      const toggleButton = this.$refs.toggleButton
      let ariaExpanded = toggleButton.getAttribute('aria-expanded')

      if (ariaExpanded === 'true') {
        ariaExpanded = 'false'
      } else {
        ariaExpanded = 'true'
      }

      toggleButton.setAttribute('aria-expanded', ariaExpanded)

      this.isOpen = !this.isOpen
    },
  },
}
</script>
2
