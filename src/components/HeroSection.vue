<script setup lang="ts">
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Alessandro-git-hub',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alessandro-poggio/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Email',
    href: 'mailto:poggioale97@gmail.com',
    icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z',
  },
]
</script>

<template>
  <section id="about" class="relative flex min-h-screen items-center justify-center px-6 pt-20">
    <div class="mx-auto max-w-3xl text-center">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
        class="mb-4 font-mono text-sm text-primary-600"
      >
        Hello, I'm
      </p>

      <h1
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
      >
        Alessandro Poggio
      </h1>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="mb-6 text-xl font-medium text-slate-500 sm:text-2xl"
      >
        Frontend Software Engineer
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        class="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
      >
        Building modern web experiences with Vue.js &amp; TypeScript.
        Based in Valencia, Spain — turning complex problems into clean, performant interfaces.
        Currently pursuing a B.Sc. in Software Engineering part-time while working full-time.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
        class="flex items-center justify-center gap-5"
      >
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          :aria-label="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full p-2 text-slate-400 transition-colors hover:text-primary-600"
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path :d="link.icon" />
          </svg>
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 800 } }"
        class="mt-16"
      >
        <a
          href="#timeline"
          aria-label="Scroll to timeline"
          class="inline-block animate-bounce text-slate-300 transition-colors hover:text-primary-500"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
