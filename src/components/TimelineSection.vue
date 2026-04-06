<script setup lang="ts">
interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  tags: string[]
  side: 'left' | 'right'
}

const timeline: TimelineItem[] = [
  {
    year: '2019 – 2021',
    title: 'Junior Project Manager / IT Responsible',
    company: 'H&M',
    description:
      'Managed IT infrastructure and coordinated project rollouts across retail locations. First hands-on experience bridging business operations with technology solutions.',
    tags: ['Project Management', 'IT Infrastructure'],
    side: 'left',
  },
  {
    year: '2021 – 2022',
    title: 'Technical Specialist',
    company: 'Mercedes-Benz',
    description:
      'Provided technical expertise in a fast-paced automotive environment. Deepened systems knowledge and developed a passion for building tools that solve real problems.',
    tags: ['Technical Support', 'Systems'],
    side: 'right',
  },
  {
    year: 'Aug 2022 – Apr 2024',
    title: 'IT Support & Systems Administration',
    company: 'Helloprint',
    description:
      'Built an AI-powered Slack bot with Node.js that reduced support tickets by ~40%. Automated 20+ onboarding workflows using PHP & Rundeck, eliminating hours of manual HR/IT work.',
    tags: ['Node.js', 'PHP', 'Automation', 'AI'],
    side: 'left',
  },
  {
    year: 'Apr 2024 – Present',
    title: 'Frontend Software Engineer',
    company: 'Helloprint',
    description:
      'Rebuilding a legacy PHP/Smarty e-commerce storefront into a modern Vue.js component architecture. Driving frontend modernization with TypeScript, component design, and performance optimization.',
    tags: ['Vue.js', 'TypeScript', 'E-commerce', 'Architecture'],
    side: 'right',
  },
]
</script>

<template>
  <section id="timeline" class="px-6 py-24">
    <div class="mx-auto max-w-4xl">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="mb-4 text-center text-3xl font-bold tracking-tight text-slate-900"
      >
        Career Journey
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100 } }"
        class="mb-16 text-center text-slate-500"
      >
        From IT operations to frontend engineering — a deliberate path toward building great software.
      </p>

      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 top-0 h-full w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-0.5" aria-hidden="true" />

        <div class="space-y-12">
          <article
            v-for="(item, index) in timeline"
            :key="item.year"
            v-motion
            :initial="{ opacity: 0, x: item.side === 'left' ? -30 : 30 }"
            :visibleOnce="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
            class="relative flex flex-col md:flex-row"
            :class="item.side === 'right' ? 'md:flex-row-reverse' : ''"
          >
            <!-- Dot -->
            <div
              class="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-white md:left-1/2"
              aria-hidden="true"
            />

            <!-- Content -->
            <div class="ml-10 md:ml-0 md:w-1/2" :class="item.side === 'left' ? 'md:pr-12' : 'md:pl-12'">
              <time class="mb-1 block font-mono text-xs text-primary-600">{{ item.year }}</time>
              <h3 class="text-lg font-semibold text-slate-900">{{ item.title }}</h3>
              <p class="mb-2 text-sm font-medium text-slate-500">{{ item.company }}</p>
              <p class="mb-3 text-sm leading-relaxed text-slate-600">{{ item.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
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
