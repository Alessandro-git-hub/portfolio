<script setup lang="ts">
interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  tags: string[]
}

const timeline: TimelineItem[] = [
  {
    year: '2019 – 2021',
    title: 'Junior Project Manager / IT Responsible',
    company: 'H&M',
    description:
      'Managed IT infrastructure and coordinated project rollouts across retail locations. First hands-on experience bridging business operations with technology solutions.',
    tags: ['Project Management', 'IT Infrastructure'],
  },
  {
    year: '2021 – 2022',
    title: 'Technical Specialist',
    company: 'Mercedes-Benz',
    description:
      'Provided technical expertise in a fast-paced automotive environment. Deepened systems knowledge and developed a passion for building tools that solve real problems.',
    tags: ['Technical Support', 'Systems'],
  },
  {
    year: 'Aug 2022 – Apr 2023',
    title: 'IT Support & Systems Administration',
    company: 'Helloprint',
    description:
      'Built an AI-powered Slack bot with Node.js that reduced support tickets by ~40%. Automated 20+ onboarding workflows using PHP & Rundeck, eliminating hours of manual HR/IT work.',
    tags: ['Node.js', 'PHP', 'Automation', 'AI'],
  },
  {
    year: 'Apr 2023 – Present',
    title: 'Frontend Software Engineer',
    company: 'Helloprint',
    description:
      'Rebuilding a legacy PHP/Smarty e-commerce storefront into a modern Vue.js component architecture. Driving frontend modernization with TypeScript, component design, and performance optimization.',
    tags: ['Vue.js', 'TypeScript', 'E-commerce', 'Architecture'],
  },
]
</script>

<template>
  <section id="timeline" class="relative px-6 py-32 overflow-hidden">
    <!-- Background accent -->
    <div class="glow-orb h-[300px] w-[300px] bg-accent/5 top-20 right-0" aria-hidden="true" />

    <div class="mx-auto max-w-5xl">
      <div class="mb-20 max-w-xl">
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="mb-3 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Career Journey
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          class="mb-4 font-display text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          From operations<br />to engineering.
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 150 } }"
          class="text-text-muted"
        >
          A deliberate path toward building great software.
        </p>
      </div>

      <!-- Education callout strip -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -12 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 200 } }"
        class="mb-16 flex flex-col gap-3 rounded-xl border-l-2 border-accent bg-surface-raised/60 px-5 py-4"
      >
        <div class="flex items-start gap-4">
          <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v3.75m0 0v1.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-10.5 0h10.5" />
          </svg>
          <div class="text-sm text-text-muted">
            <span>Currently pursuing a <span class="font-medium text-text">B.Sc. in Software Engineering</span> at <span class="font-medium text-text">Amsterdam Tech</span></span>
            <span class="mt-2 block sm:mt-0 sm:inline sm:ml-2 w-fit rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">Part-time</span>
          </div>
        </div>
        <div class="flex gap-1.5 pl-9">
          <span class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-text-faint">C</span>
          <span class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-text-faint">C++</span>
          <span class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-text-faint">Embedded Programming</span>
        </div>
      </div>

      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-accent/40 via-border to-transparent" aria-hidden="true" />

        <div class="space-y-16">
          <article
            v-for="(item, index) in timeline"
            :key="item.year"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: index * 80 } }"
            class="relative flex gap-6"
          >
            <!-- Dot -->
            <div class="relative flex-shrink-0" aria-hidden="true">
              <div class="mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface" />
            </div>

            <!-- Content card -->
            <div class="group flex-1 rounded-2xl border border-border bg-surface-raised/50 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(232,168,56,0.06)]">
              <div class="mb-3 flex flex-wrap items-center gap-3">
                <time class="font-mono text-xs text-accent">{{ item.year }}</time>
                <span class="h-px flex-1 bg-border" aria-hidden="true" />
                <span class="font-body text-sm font-medium text-text-muted">{{ item.company }}</span>
              </div>
              <h3 class="mb-2 font-display text-lg font-bold text-text group-hover:text-accent transition-colors duration-300">{{ item.title }}</h3>
              <p class="mb-4 text-sm leading-relaxed text-text-muted">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-text-faint"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
