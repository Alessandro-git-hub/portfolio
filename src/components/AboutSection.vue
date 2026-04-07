<script setup lang="ts">
const traits = [
  { emoji: '🇮🇹', text: 'Italian roots' },
  { emoji: '🌇', text: 'Based in Valencia' },
  { emoji: '⚽', text: 'Football fan' },
  { emoji: '🏎️', text: 'F1 enthusiast' },
  { emoji: '🏋️', text: 'Gym regular' },
]
</script>

<template>
  <section id="about-me" class="relative px-6 py-32 overflow-hidden">
    <div class="glow-orb h-[350px] w-[350px] bg-accent/5 -top-20 left-1/3" aria-hidden="true" />

    <div class="mx-auto max-w-5xl">
      <div class="grid gap-12 md:grid-cols-[280px_1fr] md:items-center">
        <!-- Photo -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1 }"
          class="relative mx-auto w-56 md:mx-0 md:w-full"
        >
          <div class="aspect-square overflow-hidden rounded-2xl border border-border bg-surface-raised">
            <img
              src="/ale.jpg"
              alt="Alessandro Poggio"
              class="h-full w-full object-cover object-top"
            />
          </div>
          <div class="absolute -inset-2 -z-10 rotate-3 rounded-2xl border border-accent/20" aria-hidden="true" />
        </div>

        <!-- Text content -->
        <div>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
          >
            About Me
          </p>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="mb-6 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
          >
            Beyond the code.
          </h2>
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 150 } }"
            class="space-y-4 text-text-muted leading-relaxed"
          >
            <p>
              Born and raised in Italy, I left home to move to the Netherlands, where I spent three
              years growing both personally and professionally. After that, I chased the sunshine
              and settled in Valencia.
            </p>
            <p>
              When I'm not writing code, you'll find me watching a football match, debating F1 race
              strategies, or working out at the gym. I'm curious by nature, I love understanding how
              things work, whether it's a JavaScript engine or a racing car's aerodynamics. That same
              curiosity is what pulled me into software engineering and keeps me learning every day.
            </p>
          </div>

          <!-- Trait pills -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 250 } }"
            class="mt-8 flex flex-wrap justify-start gap-2"
          >
            <span
              v-for="trait in traits"
              :key="trait.text"
              class="flex items-center gap-1.5 rounded-full border border-border bg-surface-raised/50 px-3 py-1.5 text-xs text-text-muted transition-colors duration-300 hover:border-accent/30 hover:text-text"
            >
              <span>{{ trait.emoji }}</span>
              <span>{{ trait.text }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
