<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'About Me', href: '#about-me' },
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
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-surface/80 backdrop-blur-xl border-b border-border'
        : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main navigation">
      <a href="#" class="font-display text-xl font-bold tracking-tight text-text">
        AP<span class="text-accent">.</span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden gap-10 md:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="font-body text-sm font-medium text-text-muted transition-colors duration-300 hover:text-accent"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 text-text-muted"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-show="isOpen"
      id="mobile-menu"
      class="border-t border-border bg-surface/95 backdrop-blur-xl px-6 pb-6 md:hidden"
    >
      <ul class="flex flex-col gap-1 pt-4">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="block py-3 font-body text-sm font-medium text-text-muted transition-colors hover:text-accent"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
