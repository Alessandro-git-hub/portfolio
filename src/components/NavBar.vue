<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMenu() {
  isOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4" aria-label="Main navigation">
      <a href="#" class="text-lg font-bold tracking-tight text-slate-900">
        AP<span class="text-primary-600">.</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden gap-8 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 text-slate-600"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-show="isOpen"
      id="mobile-menu"
      class="border-t border-slate-100 bg-white px-6 pb-4 md:hidden"
    >
      <ul class="flex flex-col gap-3 pt-3">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary-600"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
