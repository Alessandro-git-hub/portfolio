<script setup lang="ts">
const contactLinks = [
  {
    label: 'Email',
    value: 'poggioale97@gmail.com',
    href: 'mailto:poggioale97@gmail.com',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  },
  {
    label: 'LinkedIn',
    value: 'alessandro-poggio',
    href: 'https://www.linkedin.com/in/alessandro-poggio/',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'GitHub',
    value: 'Alessandro-git-hub',
    href: 'https://github.com/Alessandro-git-hub',
    icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
  },
]
</script>

<template>
  <section id="contact" class="relative border-t border-border px-6 py-32 overflow-hidden">
    <div class="glow-orb h-[400px] w-[400px] bg-accent/5 -top-20 right-1/4" aria-hidden="true" />

    <div class="mx-auto max-w-4xl">
      <div class="mb-16 text-center">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Contact
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mb-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Let's build something.
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 150 } }"
          class="mx-auto max-w-md text-text-muted"
        >
          Open to new opportunities, interesting projects, or a good conversation about frontend engineering.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="flex flex-col gap-4 sm:flex-row sm:justify-center"
      >
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-4 rounded-2xl border border-border bg-surface-raised/50 px-6 py-5 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(232,168,56,0.06)]"
        >
          <div class="rounded-xl border border-border bg-surface p-2.5 transition-colors group-hover:border-accent/40">
            <svg
              v-if="link.label === 'Email'"
              class="h-5 w-5 text-text-faint transition-colors group-hover:text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon" />
            </svg>
            <svg
              v-else
              class="h-5 w-5 text-text-faint transition-colors group-hover:text-accent"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path :d="link.icon" />
            </svg>
          </div>
          <div>
            <p class="font-mono text-[10px] uppercase tracking-widest text-text-faint">{{ link.label }}</p>
            <p class="text-sm font-medium text-text-muted group-hover:text-accent transition-colors duration-300">{{ link.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
